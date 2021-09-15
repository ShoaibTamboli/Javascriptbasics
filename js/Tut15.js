//Creating, Removing & Replacing Elements.

let element=document.createElement('div')//step1

//step2: provide attribute to div by setattribute, .className, .id

element.setAttribute('title','content-div');
element.className='div-class'
element.id='div-id'
element.innerText='holaaaa'
console.log(element)


//step3: 

let dynamicstring=document.querySelector('.child1')

dynamicstring.appendChild(element)
console.log(dynamicstring)
console.log(element)
//step 4: 

let dynstr=document.createTextNode('Hola this is text node');
dynamicstring.append(dynstr)


// console.log("this is test")

// let vari=document.createElement('li');
// vari.className='class-created'
// vari.id='idcraeted'
// vari.setAttribute('title','blog')
// vari.innerText='Hello ! This is created by Shoaib.'//instead of innerText and innerHTML we can use document.createTextnode.

// let text=document.createTextNode('This text is from TextNode')
// vari.appendChild(text);

// let ul=document.querySelector('.ul-list')

// ul.appendChild(vari)
// console.log(ul)
// console.log(vari)

//with the help of set attribute and appendchild. We can dynamically insert the element as we did above.

////////////Replace Element///////////

let elm2=document.createElement('h3')
elm2.id='elm2-id';
elm2.className='elm2-class'

let tnode=document.createTextNode('This is text NODE created for elm2')
elm2.appendChild(tnode)
console.log(elm2)
console.log(tnode)

//let op=document.querySelector('.child')
//op.appendChild(elm2)//to show op .

element.replaceWith(elm2)

//WE can replace child also.

let myul=document.getElementById('myul')
myul.replaceChild(element,document.getElementById('fui'))///here the first parameter is the one which we want to be replaced. and the second one is to which the change should happen.




myul.removeChild(document.getElementById('lui'));

let pr=elm2.hasAttribute("class")
elm2.removeAttribute('class')
elm2.setAttribute('title', 'mytitle')
console.log(elm2, pr)

///////////////////////Quiz--- Create a heading element with text as "Go to code with harry" and create an A tag outside it with href=www.codewithharry.com;

let element1 = document.createElement('h1');
let text = document.createTextNode('Go to Code');

element1.appendChild(text);

element2.href = '//codewithharry.com';
let div = document.querySelector('div.container');
console.log(element2);

let target=document.querySelector('.dummy4')

target.appendChild(h2)
////////////////////////////


