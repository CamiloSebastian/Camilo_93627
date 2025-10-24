// Função que será chamada ao clicar no botão
function consultarCep() {
    // Obtém o valor do campo CEP
    const cpnj = document.getElementById('cnpj').value;

<<<<<<< HEAD
    // Verifica se o CEP tem 8 dígitos
    if (cep.length !== 14) {
        alert("Por favor, insira um Cnpj válido com 14 dígitos.");
=======
    // Verifica se o CNPJ tem 18 dígitos
    if (cnpj.length !== 18) {
        alert("Por favor, insira um Cnpj válido com 18 dígitos.");
>>>>>>> 1e6939cfc8bbccac8b816124d1184f6c3dff64be
        return; // Interrompe a execução da função se o CEP for inválido
    }

    // URL da API de CPNJ (usando o serviço ViaCEP como exemplo)
    const url = `https://brasilapi.com.br/api/cnpj/v1/{cnpj}`;

    // Faz uma requisição à API para obter os dados do CEP
    fetch(url)
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => {
            // Verifica se o CEP foi encontrado
            if (data.erro) {
                alert("CNPJ não encontrado.");
                return; // Interrompe a execução se o CEP não for válido
            }

            // Atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('pais').textContent = data.logradouro;
            document.getElementById('email').textContent = data.bairro;
            document.getElementById('bairro').textContent = data.localidade;
            document.getElementById('situacao').textContent = data.uf;
        })
        .catch(error => {
            console.error("Erro ao consultar o CNPJ:", error); // Loga erros no console
            alert("Ocorreu um erro ao consultar o CNPJ.");
        });
}