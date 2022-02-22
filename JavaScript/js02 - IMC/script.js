const resultadoIMC = document.getElementById('resultado-imc');
const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');

calcular.addEventListener('click', function (e) {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (peso === '' || altura === '') {
        alert('Por favor, preencha todos campos!');
    } else if (peso <= 0 || altura <= 0) {
        alert('Altura ou peso inválidos.');
    } else {
        const a = parseFloat(peso);
        const b = parseFloat(altura);

        const imc = a / (b * b);
        console.log(`${imc}`);

        resultadoIMC.innerHTML = displayIMC(imc);
    }

    e.preventDefault();
});

limpar.addEventListener('click', function (e) {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado-imc').innerHTML = '';
    e.preventDefault();
});

//fazer o switch
function displayIMC(x) {
    switch (true) {
        case x < 18.5:
            return `IMC = ${x.toFixed(2)}.\n Classificação: Abaixo do peso`;
            break;
        case x >= 18.5 && x < 25:
            return `IMC = ${x.toFixed(
                2
            )}.\n Classificação: Peso ideal (parabéns)`;
            break;
        case x >= 25 && x < 30:
            return `IMC = ${x}.\n Classificação: Levemente acima do peso.`;
            break;
        case x >= 30 && x < 35:
            return `IMC = ${x.toFixed(2)}.\n Classificação: Obesidade grau I`;
            break;
        case x >= 35 && x < 40:
            return `IMC = ${x.toFixed(
                2
            )}.\n Classificação: Obesidade grau II (severa)`;

            break;
        case x >= 40:
            return `IMC = ${x.toFixed(
                2
            )}.\n Classificação: Obesidade III (mórbida)`;
            break;
    }
}