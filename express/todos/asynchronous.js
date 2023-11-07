// for (let i = 0; i < 10000; i++) {
//     console.log(i)
// }

setTimeout(() => {
    makeApiCall()
}, 2000)

console.log(1)
console.log(2)
console.log(3)

function doSomethimg() {
    console.log("do something")
}

function makeApiCall() {
    console.log("api response recived..")
}


/*  Promise 
        - pending
        - resolve
        - reject
*/

let promise1 = new Promise((resolve, reject) => {
    // resolve("[1,2,3,4]")
    reject("[1,2,3,4]")
})

console.log(promise1)






