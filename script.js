const names = document.getElementById('nomes');
const arrNames = [];

function getName(e) {

    if (names.value === '') {
        alert('Insira o nome');
    } else if (isNaN(names.value) === false) {
        alert('Caractere inválido. Por favor, digite um nome');
    } else {
        arrNames.push(names.value.toUpperCase());

        let output = '';
        const arrOrd = [];

        arrNames.forEach((n) => {
            output += `<li>${n}</li>`;
            arrOrd.push(n);
        });

        document.getElementById('listaSimples').innerHTML = output;

        arrOrd.sort();
        output2 = '';

        arrOrd.forEach(
            (b, index) => (output2 += `<li>${index + 1}. ${b}</li>`)
        );

        document.getElementById('listaSimples').innerHTML = output2;
    }

    clearInput();

    e.preventDefault();
}

function clearInput() {
    document.getElementById('nomes').value = '';
}

document.getElementById('submit').addEventListener('click', getName);
