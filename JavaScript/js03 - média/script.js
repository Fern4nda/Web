const inputMedia = document.getElementById('media');
const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');
const conceito = document.getElementById('conceito');

calcular.addEventListener('click', function (e) {
    const n1 = document.getElementById('nota1').value;
    const n2 = document.getElementById('nota2').value;

    if (n1 === '' || n2 === '') {
        alert('preencha os campos!');
    } else if (n1 > 10 || n2 > 10) {
        alert('nota inválida. Por favor, insira uma nota de 1 a 10');
    } else {
        const a = parseFloat(n1);
        const b = parseFloat(n2);

        const media = (a + b) / 2;
        inputMedia.innerHTML = parseFloat(media);

        conceito.innerHTML = calcConceito(media);
    }

    e.preventDefault();
});

limpar.addEventListener('click', function (e) {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('media').innerHTML = '';
    document.getElementById('conceito').innerHTML = '';
    e.preventDefault();
});

function calcConceito(m) {
    if (m >= 9.5) {
        return 'Exelente';
    } else if (m >= 8.5 && m < 9.5) {
        return 'Ótimo';
    } else if (m >= 7.5 && m < 8.5) {
        return 'Bom';
    } else if (m >= 6 && m < 7.5) {
        return 'Regular';
    } else {
        return 'Insuficiente';
    }
}
