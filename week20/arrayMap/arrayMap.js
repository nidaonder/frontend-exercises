const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

const USER_OBJ = USERS.map(item => 
    {
        return {
            userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }
    }
)

console.log(USER_OBJ)