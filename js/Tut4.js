//Type Conversion and Type Coercion

console.log("Welcome to Tut4");


let marks=10;
console.log((typeof marks),marks)

console.log(marks,typeof marks)
//Use 'String' to convert Datatype of number/boolean/object

let getDate= String( new Date());
console.log(getDate, typeof getDate)


let myarr= String([1,2,3,"string",true])
console.log(typeof myarr)

let myarr1= [1,2,3,"string",true]
console.log(myarr1.length,(typeof myarr1))

//toString

let i=90;
console.log(i)
console.log(i.toString())

//Number

let num1="99";
console.log(num1)

console.log(Number(num1))


let num2="3456";
console.log(num2)

console.log(Number(num2))

let num3=true;
console.log(num3)

let num4= Number( [1,3,5,7,9])
console.log (num4,( typeof num4))
console.log(num4)

let mark=parseFloat(99.99)
console.log(mark, typeof(mark))
console.log(mark.toFixed(5),(typeof mark) )


//Type Coercion.

let a="100"
let b=200;

console.log(a+b)//output will concatenate

let a1=Number("100") //we have converted string to Number
let b1=200;

console.log(a1+b1) //Output will be Sum of two numbers