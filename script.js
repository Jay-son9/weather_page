
const timeEl = document.getDocumentById('time');
const dateEl = document.getDocumentById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForcastEl = document.getDocumentById('weather-forecast');
const currentTempEl = document.getDocumentById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_Key = '';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();

    const ampm = hour >= 12 ? 'PM' : 'AM'

    timeElement.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${PM}</span>`

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((sucess) => {
        console.log(sucess);

        let { latitude, longitude } = success.coords;


        fetch(``).then(res => res.json()).then(data => {
            console.log(data)
        })
    })
}
