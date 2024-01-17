let firstName = prompt("Please enter your name:")

let nameDOM = document.querySelector("#myName")
nameDOM.innerHTML = firstName;



document.querySelector('#myClock').addEventListener("load", showTime())
function showTime() {
    let date = new Date().toLocaleTimeString('tr-TR')
    let day = new Date().getDay('tr-TR')
    switch(day) {
        case 0:
            day = "Pazar"
            break;
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Sali"
            break;
        case 3:
            day = "Carsamba"
            break;
        case 4:
            day = "Persembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
    }
    document.querySelector('#myClock').innerHTML = `${date} ${day}`
}
setInterval(showTime, 1000)