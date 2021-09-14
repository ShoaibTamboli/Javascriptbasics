//Understanding DOM & Creating a Website Layout.



let a =document;
 a=document.all;
// a=document.body;
// a=document.forms[0];

// Array.from(a).forEach means a ki madadt se banao ek array. aur fir usko iterate karo.
Array.from(a).forEach(function (element){
console.log(element)
});

let b=document.links[0].href;
console.log(b)


let c=document.images;

Array.from(c).forEach(function (element) {
    console.log(element)
});
//console.log(c);



let d= document.scripts;

Array.from(d).forEach(function (abc) {
    console.log(abc)
})
//console.log(d)