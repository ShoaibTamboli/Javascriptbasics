//Children, Parent & Traversing the DOM

let a=document.querySelector('.dummy')
a=document.querySelector('.container')
//console.log(a.childNodes)// will include comment and text .

//console.log(a.children)//will include only elements. will Exclude comment and text.

// a= document.nodeName;
// console.log(a)

let nodeName=a.childNodes[9].nodeName;
let nodeType=a.childNodes[9].nodeType;

//console.log(nodeName)
//console.log(nodeType)

//Node type

//1. Element
//2. Attribute
//3. Text Node
//8. Comment
//9. document
//10. doctype

let xyz=document.querySelector('.container');
console.log(xyz.children[0].children[0].children);

console.log(xyz.firstChild)
console.log(xyz.firstElementChild)
console.log(xyz.lastChild)
console.log(xyz.lastElementChild)
console.log(xyz.childNodes)
console.log(xyz.children)
console.log(xyz.childElementCount)
console.log(xyz.firstElementChild)
console.log(xyz.firstElementChild.parentNode)
console.log(xyz.firstElementChild.nextSibling)//can get commnet and text
console.log(xyz.firstElementChild.nextElementSibling)// will get only element, excludes comment and text.
console.log(xyz.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)

