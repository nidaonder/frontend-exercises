let firstName = "Lorem"

function greetings(firstName) {
    console.log(`Merhaba ${firstName}`)
}

greetings("apple");


function greeting2(firstName, lastName) {
    let info =  `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greeting2("ad", "soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}


let htmlInfo = `<span style = "color:red"> color reddd </span>`
domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greeting2("lorem", "ipsum"))