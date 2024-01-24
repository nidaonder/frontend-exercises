const PRODUCT = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

PRODUCT.forEach((product, index, array) => console.log(product, index, array))

PRODUCT.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`) 
console.log(PRODUCT)

const userListDOM = document.querySelector("#userList")
PRODUCT.forEach(item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})