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