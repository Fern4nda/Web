const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
  let hoje= new Date();
  let date_event = new Date(document.form_main.date_end.value);

  let diferenca = date_event.getTime() - hoje.getTime();

  document.getElementById('days').innerText = Math.floor(diferenca / day);
}