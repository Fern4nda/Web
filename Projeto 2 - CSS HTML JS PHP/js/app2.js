const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const password2 = document.getElementById('senha2');
const birthday = document.getElementById('birthday');
const termos = document.getElementById('termos');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email inválido');
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} é obrigatório`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} deve ter no mínimo ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} deve ter no máximo ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Senhas não conferem');
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// get bithday
function checkBirthday(input) {
    const re = /(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))/;
    if (re.test(birthday.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Data de nascimento inválida');
    }
}

function checkTermos(input) {
    if (termos.checked) {
        showSuccess(input);
    } else {
        showError(input, 'Aceite os termos.');
    }
}

// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2, birthday, termos]);
    if (
        checkLength(username, 3, 15) &&
        checkLength(password, 6, 25) &&
        checkEmail(email) &&
        checkPasswordsMatch(password, password2) &&

    )
        checkBirthday(birthday)
    checkTermos(termos);
});

// checar se está tudo certo
function formIsOk() {}

// Event listeners
// form.addEventListener('submit', function (e) {
//     if (formIsOk()) {
//         form.submit((window.location.href = 'inserir.php'));
//     } else {
//         e.preventDefault();
//     }
// });
