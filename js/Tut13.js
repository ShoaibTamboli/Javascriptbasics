//HTML Element Selectors In JavaScript


// Element selector
// 1. single element selector
// 2. multi element selector

/////////////////////////////////
//1. single element selector

let a = document.getElementById('first-child')

//a = a.className;
//a = a.childNodes;
//a=a.parentNode;
//a.style.color='red'

//  a.innerText='<h1>This is test</h1>';
//  a.innerHTML='<h1> hello </h1>'
//console.log(a);

//2nd single selector: Query selector;

let b = document.querySelector('#first-child')
b=document.querySelector('.child')
b=document.querySelector('b')
//console.log(b)

//Above will return first div , b tag element.

/////////////////////


//2. multi element selector

let c= document.getElementsByClassName('child');
 c= document.getElementsByClassName('container');

//console.log(c[0].getElementsByClassName('child')); ///console.log(c[0]) this will give 1st element.

c=document.getElementsByTagName('div');

// Array.from(c).forEach(element => {
//     console.log(element);
//     element.style.color='red'
// });


/// We can also use For loop.

for (let index = 0; index < c.length; index++) {
    const element = c[index];
    console.log(element);
    element.style.color='red'
}


//console.log(c)

