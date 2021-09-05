//If Else Conditionals & Switches


let age=18; //single = is assignment opeartor. In this case it will assign 19 to age.

//== double equal to is compare opeartor.In this case we are comparing whether age is 19 or not.

if(age==19){
    console.log("Age is 19")

}else{
    console.log("Age is not 19")
}
//== just checks the value not datatype. === checks both datatype and value.


let adultAge=20;

if(adultAge==10){

    console.log("Age is 10")
}

else if(adultAge==20){
    
    console.log("Age is 20")
}

else{
    console.log("Age is more than 20")
}
//note: when a condition matches else if, then it wont execute other else if. It will stop on first elseif only.

// if we do not use else if then it will validate all the if conditions. Suppose in our code we have 100's of 'if' then it will execute all the 100 'if' and then it will show output. So to avoid we this we use 'else if '


////To check whether a variable is defined or not then you can do as below:

//let vari=100;

if (typeof vari !=='undefined'){
    console.log('vari is defined')

}

else{
    console.log('vari is not defined')
}

//boolean


let isdrive=false;

if(isdrive || age>18 && adultAge==20){
    console.log('you can drive');
}else{
    console.log('you cannot drive');
}
//use && and || 



//terniary opeartor.

console.log(age==18? 'age is 18': 'age is not 18')


///switch statement.

switch (age) {
    case 18:console.log('you are 18')
        
        break;

        case 20:console.log('you are 20')
        
        break;

        case 30:console.log('you are 30')
        
        break;

    default:
        console.log('you are in default loop')
        break;
}

////////