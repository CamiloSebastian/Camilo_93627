// script.js

// Seleciona o formulário de contato pelo ID
const formContato = document.getElementById('formContato');

// Adiciona um ouvinte de evento para o envio do formulário
formContato.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão para processarmos com JS

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples: campos não devem estar vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return; // Interrompe a execução se algum campo estiver vazio
    }

    // Exibe uma mensagem de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa os campos do formulário
    formContato.reset();
});


// =====================
// EFEITOS NAS IMAGENS
// =====================

// Seleciona todas as imagens das seções de introdução e produtos
const imagens = document.querySelectorAll('.imagem img, .produto img');

// Cria um "observer" que observa quando as imagens entram na área visível da tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Quando a imagem estiver visível (intersectando a viewport)
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel'); // adiciona a classe que ativa o fade-in
        }
    });
}, {
    threshold: 0.3 // ativa quando 30% da imagem estiver visível
});

// Observa cada imagem
imagens.forEach(img => observer.observe(img));

// EFEITO SUAVE DE ROLAGEM NA PÁGINA (ao clicar em links internos, se houver futuramente)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // evita o comportamento padrão
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth' }); // rolagem suave
        }
    });
});