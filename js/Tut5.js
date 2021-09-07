//String


let userName="Shoaib";
let UserSurname="Tamboli";

console.log(userName+" "+UserSurname);

console.log(userName,UserSurname);
////

let html="<h1> This is HEADING1 <h1>" +"<p>This is paragraph</p>"

html=html.concat('this',' this is ','helllooo')
console.log(html)
console.log(html.length)
console.log(html.toUpperCase())
console.log(html.toLowerCase())

console.log(html[1]);

console.log(html.indexOf(1))

console.log(html.lastIndexOf('<'))

console.log(html.charAt(0))//it will show chracter based on index.
console.log(html.endsWith('helllooo'))

console.log(html.includes('h1'))

console.log(html.substring(0,11))//based on index. 
console.log(html.slice(0,11))//same as substring but if we pass -4 thrn it will give last 4 characters.

console.log(html.split('>'))//will split text into array as per requested value.

console.log(html.replace('h1','header'))//will replace only for first occurance.


//Template Literals

let fruit1='orange\'s';
let fruit2='Apple';
let myhtml=`<h1> This is template literal </h1>
<p> This is a paragraph wrote with in p tag.</p>
<bold>This is bold<bold> <br/> <strong>This is strong</strong>

<h2>I like ${fruit1} more than ${fruit2} </h2>`;

document.body.innerHTML=myhtml;

