//Função para validar o formulário
function validateForm() {
    //Obtém os valores dos campos de input pelo ID
    // let usa quando não muda e var muda, ambos cria variavéis
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let consenha = document.getElementById('consenha').value;
    //Obtém o elemento para exibir mensagem de erro
    let errorm = document.getElementById('errorm');




    // Limpa qualquer mensagem de erro anterior
    errorm.textContent = '';


    //Verifica se o campo "Nome" está vazio
    if (name === '') {
        // Exibe uma mensagem de error e interrompe o envio do formulário
        errorm.textContent = 'Seu nome fi da desgrama, insira ele'
        return false; //Retorna False para impedir o envio do formulário
    }

    //Verifica se o campo "Email" está vazio
    if (email === '') {
        // Exibe uma mensagem de error e interrompe o envio do formulário
        errorm.textContent = 'Seu email meu amigo, tem que colocar'
        return false; //Retorna False para impedir o envio do formulário
    }

    //Verifica se o campo "Senha" está vazio
    if (senha === '') {
        // Exibe uma mensagem de error e interrompe o envio do formulário
        errorm.textContent = 'Coloque uma senha, porfavor'
        return false; //Retorna False para impedir o envio do formulário
    }

    //Verifica se o campo "Confirmar senha" está vazio
    if (consenha !== '') {
        // Exibe uma mensagem de error e interrompe o envio do formulário
        errorm.textContent = 'Sua senha não está igual a outra'
        return false; //Retorna False para impedir o envio do formulário
    }

    //Se todas as verificacações forem bem-sucedidadas, o formulário pode ser enviado
    return true; // Permite o envio do formulário
}
