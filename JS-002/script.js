document.getElementById('calculatorForm').addEventListener
('submit',
     function(event) {
                        event.preventDefault();

                        // Pegando os valores dos campos
                        const num1 = parseFloat(document.getElementById('num1').value);
                        const num2 = parseFloat(document.getElementById('num2').value);

                        // Validando se os números são válidos
                        if (isNaN(num1) || isNaN(num2)) {
                            alert('Por favor, insira números válidos!');
                            return;
                        }

                        // Realizando a soma
                        const result = num1 + num2;

                        // Exibindo o resultado
                        document.getElementById('result').textContent = result;
});