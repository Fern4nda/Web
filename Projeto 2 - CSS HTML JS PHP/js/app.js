const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const password2 = document.getElementById('senha2');
const birthday = document.getElementById('birthday');
const termos = document.getElementById('termos');

// checar se está tudo certo
function formIsOk() {
    const reName = /^[a-záàâãéèêíïóôõöúçñ ]{2,70}$/i;
    const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/i;
    const rePassword = /^[A-Za-z]\w{7,15}$/;
    const reBirthday = /(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))/;
    if (
        reName.test(username.value) &&
        reEmail.test(email.value) &&
        rePassword.test(password.value) &&
        reBirthday.test(birthday.value) &&
        termos.checked
    ) {
        if (password.value === password2.value) {
            showSuccess(input);
            return true;
        }
    } else {
        alert('erro');
        return false;
    }
}

// usar as funções antigas na formisok pra verirficar lembrar dos ()
// testar se com type="password" vai no bd
// se tiver tempo no inserir php fazer um estilo mais bonitinho

// Event listeners
form.addEventListener('submit', function (e) {
    if (formIsOk()) {
        form.submit((window.location.href = 'inserir.php'));
    } else {
        e.preventDefault();
    }
});
