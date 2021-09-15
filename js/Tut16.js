//Events & Event Object In JavaScript 

let a = document.getElementById('heading')
a.addEventListener('click', function (e) {  
//we can use other event , susch as  Mouseover , etc...
    console.log("HEading clicked.")
    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList
    variable = Array.from(e.target.classList)
    variable=e.offsetX;
    variable=e.clientY;
    console.log(variable)


    //console.log(e) //e is event object
    //location.href='//codewithharry.com'    //when clicked will navigate to mentioned URL.


})

//console.log(a)