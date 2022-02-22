
class Aluno {
    constructor(nome, matricula, curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
    }
    printAluno(nome, matricula, curso) {
        const tabela = document.getElementById('table');

        
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${curso}</td>
    `;

        tabela.appendChild(row);
        console.log(tabela);
    }
}
document.getElementById('submit').addEventListener('click', (e) => {
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const curso = document.getElementById('curso').value;


    const reNome = /^[a-záàâãéèêíïóôõöúçñ ]{2,70}$/i;
    const reMatricula = /^[0-9]{6,9}$/;
    const reCurso = /^[a-záàâãéèêíïóôõöúçñ ]{2,50}$/i;

    if (
        reNome.test(nome) &&
        reMatricula.test(matricula) &&
        reCurso.test(curso)
    ) {
        const newStudent = new Aluno(nome, matricula, curso);
        newStudent.printAluno(nome, matricula, curso);
    } else {
        alert('Dados inválidos');
    }

    clear();
    e.preventDefault();
});

function clear() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('curso').value = '';
}
