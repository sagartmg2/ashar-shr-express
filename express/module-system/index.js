/* 
    node
    
    node modules    
        - core module
            - fs
            - path
            - http
            - http modules - to create APIs 
        - local module
        - third party module.

*/

// const signIn = require("./auth")
// signIn()
// const signup = require("./auth")
// const signup = () =>{}
// signup()

const auth = require("./auth")
// console.log(auth);
auth.signIn()
auth.signup("ram","12345678")





// const fs = require("fs")

// fs.writeFileSync("log.txt","logged in at 3:00")

// const http = require("http")

// http.createServer