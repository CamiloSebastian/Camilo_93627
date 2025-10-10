document.getElementById('calculatorForm').addEventListener
('submit',
     function(event) {
                         event.preventDefault();

    // Pegando os valores dos campos
    const num1 = parsefloat(document.getElementById('num1').value);
    const num2 = parsefloat(document.getElementById('num2').value);
    
    //validar se os números são válidos
    if (IsNah(num1) || isNah(num2)) {
        alert('Por favor, insira números válidos!');
        return;
    }

    // Realizando a soma
    const result = num1 + num2;

    //exibindo o resultado
    document.getElementById('result').textContent = result;
    }
)