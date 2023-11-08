// for (let i = 0; i < 10000; i++) {
//     console.log(i)
// }

// setTimeout(() => {
//     makeApiCall()
// }, 2000)

console.log(1)
console.log(2)
console.log(3)

function doSomethimg() {
    console.log("do something")
}




/*  Promise 
        - pending
        - resolve
        - reject
*/

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("[1,2,3,4]")
        // reject("server error")
    }, 2000)
})

console.log(promise1)



function makeApiCall() {

    promise1
        .then((res) => {
            console.log({ res })
        })
        .catch((err) => {
            console.log(err)
        })


    console.log("we have the response...as ..");
}


makeApiCall()






