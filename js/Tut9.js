//Functions.

let name = 'Shoaib'
let skill = 'Full stack developer'

function info(name, skill) {
    console.log('Hello this is ', name, 'i am a ', skill);

}

info(name, skill)
///below is written by Template literal
let fname = 'shoaib';
let skillset = 'react';

function details(skillset = 'good') {
    // console.log(`hello world! ${fname} i am a ${skillset} developer`, `dsjd`
    // )
    let msg = `hello world! ${fname} i am a ${skillset} developer`;

    return msg
}

let val = details()

console.log(val)
///////


// let city=10;
// let town='dombivli';
// let landmark='GHAR'

// function address(town,landmark,city) {
//     // console.log (`Hello! My city is ${city} and my town is ${town} and my landmark is ${landmark}!`)

//     console.log(`${city} ${town} ${landmark}`)

//     console.log(city,town,landmark)
// }

// address(city,town,landmark)

/////////////


///we can insert function into variable: Refer below example.



const mygreet = function (skillset = 'good') {
    // console.log(`hello world! ${fname} i am a ${skillset} developer`, `dsjd`
    // )
    let msg = `hello world! ${fname} i am a ${skillset} developer`;

    return msg
}

let value = mygreet()
console.log(value)

///// Object 

const myobj = {
    name: "shoaib",
    game: function () {

    return "GTA"
}

}

console.log(myobj.game())

////

arr=['fruniture',20,30];

arr.forEach(function (element, index, array) {
    console.log(element, index, array)
} 
    //generally we do not print array in iteration.
);


////////////////////////scope



let int=1234;

console.log(int);

function ui(fname){

    let int=10;
    console.log(int)
    return `this is ${fname} ui`
}
console.log(ui("shoaib"),int)
///let and const have block level scope.

// var have function level scope.



