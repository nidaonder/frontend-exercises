// array olusturmak

let domain = "nida"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bos list

// array icindeki eleman sayisini ogrenmek

console.log(items.length) // -> sadece consolda gorunur

document.querySelector('#info').innerHTML = items.length // -> html'e yansitilir kullanici gorur

// ilk elemana ulasmak

console.log(items[0])

// ortadaki elemana ulasmak

console.log("ortadaki eleman : ", 
    items[ Math.floor(items.length / 2) ]
)

// son elemana ulasmak

console.log(items[items.length-1])

// degisken icindeki bilginin array olup olmadiginin kontrol edilmesi

console.log(typeof(items)) // -> object olarak cikti veriyor

console.log(
    Array.isArray(items)
)

// hangileri isArray -> true verir?

console.log(" [] : ", Array.isArray( [] ))
console.log("1 : ", Array.isArray( 1 ))
console.log("true : ", Array.isArray( true ))

// arraylerde sona eleman eklemek -> push

items.push(50)
console.log(items)

// basa eleman eklemek -> unshift

items.unshift(5)
console.log(items)

// sondaki elemanı cikarmak -> pop

let lastItem = items.pop()
console.log("lastItem : ", lastItem," & ", "items : " , items)

// bastaki elemanı cikarmak -> shift
let firstItem = items.shift()
console.log("firstItem : ", firstItem, " & ", "items : ", items)

// array icindeki bir ogenin bilgisinin degistirilmesi

items[0] = 1
items[items.length-1] = 300
console.log(items)

// array methods

let arrays = [1, 2, 3, 4, 5]

// array icinde array

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

arrays.unshift(femaleUsers) // -> basa ekliyoruz
console.log(arrays)

arrays.push(maleUsers) // -> sona ekliyoruz
console.log(arrays)

// array icerisinden elemanları ayirmak

let newArrays = arrays.splice(2,4)
console.log("newArrays : ", newArrays, " & ", "arrays : ", arrays)

// array icindeki ogenin index bilgisini bulmak

arrays.unshift("lorem")
arrays.push("ipsum")
console.log(arrays)
console.log(arrays.indexOf("ipsum"))

// array kopyalamak

let copyArrays = arrays.slice()
copyArrays.pop() // -> son oge cikarttik
console.log("copyarrays : ", copyArrays, " & ", "arrays : ", arrays)

let es6Arrays = [...arrays] // -> es6 ve sonrasinda gelen copy islemi
console.log(es6Arrays)

let allUsers = [...femaleUsers, ...maleUsers] // -> 2 arrayi birlestirdik es6 ile
console.log(allUsers)

// array icindeki bilgiyi stringe cevirmek

console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// istedigimiz index bilgisine oge eklemek -> splice (index, 0, value)

allUsers.splice(allUsers.length-1, 0, "Melissa")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem")
console.log(allUsers)