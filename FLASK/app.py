from flask import Flask, render_template, request, redirect, url_for, session, flash
import mysql.connector

app = Flask(__name__)
app.secret_key = "chave_secreta"

# Conexão com o banco
def conectar():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",  # coloque sua senha se tiver
        database="mosqueteira_db"
    )

# ------------------ ROTAS -------------------

# Tela de login
@app.route('/')
def index():
    return render_template('index.html')

# Login
@app.route('/login', methods=['POST'])
def login():
    login = request.form['login']
    senha = request.form['senha']

    con = conectar()
    cur = con.cursor()
    cur.execute("SELECT * FROM usuarios WHERE login=%s AND senha=%s", (login, senha))
    usuario = cur.fetchone()
    con.close()

    if usuario:
        session['usuario'] = login
        return redirect('/classificacao')
    else:
        flash("Usuário ou senha incorretos!")
        return redirect('/')

# Cadastro de novo usuário
@app.route('/registrar', methods=['POST'])
def registrar():
    novo_login = request.form['novo_login']
    nova_senha = request.form['nova_senha']

    con = conectar()
    cur = con.cursor()

    # Verifica se login já existe
    cur.execute("SELECT * FROM usuarios WHERE login=%s", (novo_login,))
    existente = cur.fetchone()

    if existente:
        flash("Esse login já existe. Tente outro.")
    else:
        cur.execute("INSERT INTO usuarios (login, senha) VALUES (%s, %s)", (novo_login, nova_senha))
        con.commit()
        flash("Usuário cadastrado com sucesso! Agora você pode fazer login.")
    
    con.close()
    return redirect('/')

# Página de listagem das cartas
@app.route('/classificacao')
def classificacao():
    if 'usuario' not in session:
        return redirect('/')

    con = conectar()
    cur = con.cursor()
    cur.execute("SELECT * FROM carta")
    produtos = cur.fetchall()
    con.close()

    return render_template('classificacao.html', produtos=produtos)

# Tela de cadastro de uma nova carta
@app.route('/cadastro')
def cadastro():
    if 'usuario' not in session:
        return redirect('/')
    return render_template('cadastro.html')

# Salvar carta no banco
@app.route('/salvar', methods=['POST'])
def salvar():
    nome = request.form['nome']
    elixir = request.form['elixir']
    raridade = request.form['raridade']

    con = conectar()
    cur = con.cursor()
    cur.execute("INSERT INTO carta (nome, elixir, raridade) VALUES (%s, %s, %s)",
                (nome, elixir, raridade))
    con.commit()
    con.close()

    flash("Carta cadastrada com sucesso!")
    return redirect('/classificacao')

# Rota para excluir uma carta
@app.route('/excluir/<int:id>', methods=['POST'])
def excluir(id):
    if 'usuario' not in session:
        return redirect('/')

    con = conectar()
    cur = con.cursor()
    cur.execute("DELETE FROM carta WHERE id=%s", (id,))
    con.commit()
    con.close()

    flash("Carta excluída com sucesso!")
    return redirect('/classificacao')

# Logout
@app.route('/logout')
def logout():
    session.pop('usuario', None)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
