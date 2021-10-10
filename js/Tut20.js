//Creating Editable Div Using JavaScript: Exercise 2


console.log('tut20')

/*


you have to create a DIV and Inject it into the page which contain heading.

whenever someone clicks on the div it should be converted into an editable item. Whenever user clicks away(blur). save the note into the local storage.


*/


///solution:


let newDiv=document.createElement('div');
newDiv.setAttribute('title','newDiv');
newDiv.className='newDiv';
console.log(newDiv)

let targetDiv=document.querySelector('#heading')

targetDiv.append(newDiv);

let headone=document.querySelector('#heading');
headone.addEventListener('click', function(e) {
    
})