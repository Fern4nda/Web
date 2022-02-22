
const message = document.getElementById('message');

document.addEventListener('DOMContentLoaded', printDate);

const getFullDate = function () {
    let date = new Date();
    return date;
};

function getDayWeek(date) {
    const weekDay = date().getDay();
    switch (weekDay) {
        case 0:
            return 'domingo';
            break;
        case 1:
            return 'segunda-feira';
            break;
        case 2:
            return 'teça-feira';
            break;
        case 3:
            return 'quarta-feira';
            break;
        case 4:
            return 'quinta-feira';
            break;
        case 5:
            return 'sexta-feira';
            break;
        case 6:
            return 'sábado';
            break;
    }
}

function getTheMonth(date) {
    const month = date().getMonth();
    switch (month) {
        case 0:
            return 'janeiro';
            break;
        case 1:
            return 'fevereiro';
            break;
        case 2:
            return 'março';
            break;
        case 3:
            return 'abril';
            break;
        case 4:
            return 'maio';
            break;
        case 5:
            return 'junho';
            break;
        case 6:
            return 'julho';
            break;
        case 7:
            return 'agosto';
            break;
        case 8:
            return 'setembro';
            break;
        case 9:
            return 'outubro';
            break;
        case 10:
            return 'novembro';
            break;
        case 11:
            return 'dezembro';
            break;
        case 1:
            return 'fevereiro';
            break;
    }
}

function timeGreets(date) {
    const hours = date().getHours();
    if (hours >= 6 && hours < 12) {
        return 'Bom dia!';
    } else if (hours >= 12 && hours < 18) {
        return 'Boa tarde!';
    } else  {
        return 'Boa noite!';
    }
}

function printDate() {
    const day = getFullDate().getDate();
    const weekDay = getDayWeek(getFullDate);
    const month = getTheMonth(getFullDate);
    const hours = getFullDate().getHours();
    const minutes = getFullDate().getMinutes();
    const greet = timeGreets(getFullDate);

    message.innerHTML = `${greet}! Hoje é ${weekDay}, dia ${day} de ${month} de ${getFullDate().getFullYear()} - ${hours}:${minutes}hrs`;

    console.log(getFullDate());
}
