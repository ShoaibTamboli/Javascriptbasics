//console
console.time("timetooktoexecute")

console.log("Hello World!"); //String
console.log(24); //number
console.log(20 + 10); //addition
console.log('hello in single quotes'); //string
console.log(['a', 'b', 'c', 'd', 'e']) //array

console.log(["abcd", "pqrs", "wxyz"]) //array

console.log([10, 11, 12, 13, 14, 15]) //array with numbers

console.log({
    Name: "Shoaib",
    Age: "20"
}, {
    Name: "Raj",
    Age: 20
}, {
    Name: "Rajjjj",
    Age: 21
})


console.table({
    Name: "Shoaib",
    Age: 20
})

console.warn("This is warning")
console.timeEnd("timetooktoexecute")
console.assert(900 < 300, "900<300 is false")
console.error("this is error")
//console.clear()

