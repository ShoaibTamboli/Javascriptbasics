//Primitive Datatype.


//String

let userName="Shoaib";
console.log("My String is : "+userName)
console.log("DataType is : "+(typeof userName))// use 'typeof variablename' to know the Datatype

//Numbers

let a= 1;
console.log("DataType is : "+(typeof a))// use 'typeof variablename' to know the Datatype

//boolean

let rain=true;
console.log("DataType is: "+typeof (rain))


let rainy=true;
console.log("DataType is: "+typeof rainy)

//Null--DataType is Object but it is a Primitive Data type.

let checknull=null;
console.log("DataType is : "+typeof(checknull))


//Undefined

let checkundefine=undefined;
console.log(checkundefine)

let anothercheck;
console.log("dataType is : "+typeof( anothercheck))

//------------------------------------------
//Refrence DataType.


//Array

let arr2=[1,2,3,4,"string","20",false]
console.log(arr2)
console.log(typeof (arr2), arr2)


//Object Literals

let empNo={
    Shoaib:12000,
    Tanay: 12001,
    testuser_1: 12002
}
console.log(empNo) 
console.log(typeof empNo) 

// Function


function getDetails(){

}
console.log(typeof getDetails)


//Date 

let datecheck= new Date()
console.log(datecheck)

console.log(typeof datecheck)

