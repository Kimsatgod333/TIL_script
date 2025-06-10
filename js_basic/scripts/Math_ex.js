const anniDate = document.querySelector('#anni_date');
const dateBtn = document.querySelector('#date_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
const anniversary = document.querySelector('input[name=anniversary]')
const anniContent = document.querySelector('h1');
console.log(anniDate,dateBtn,resultDate,resultTime);
dateBtn.addEventListener('click',calcDate)
function calcDate(){
    const date = new Date(anniDate.value);
    const today = new Date();
    const googleBirthDay = Math.abs(date - today);
    const dateFlow = Math.floor(googleBirthDay / (1000*60*60*24))
    const timeFlow = Math.floor(googleBirthDay / (1000*60*60))
    resultDate.textContent = dateFlow;
    resultTime.textContent = timeFlow;
    anniContent.textContent = anniversary.value;
}