
/* exceptional handeling */

// let a = 1
// let b = 2
try {
    let c = a + b;
    console.log({ c })
} catch (err) {
    console.log(err.message)
}
console.log("do somehting..")