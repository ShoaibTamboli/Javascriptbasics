//More on JavaScript Events
console.log('this is tut17')

let btn=document.getElementById('btn')
console.log(btn)

btn.addEventListener('click',func1)
btn.addEventListener('dblclick',func2)
btn.addEventListener('mousedown',func3)




//btn.addEventListener('mousedown',func3)



function func1(e) {
   // console.log('thanks',e);
    e.preventDefault()
}


function func2(e) {
   // console.log('thanks this is double click',e);
    e.preventDefault()
}

function func3(e) {
  //  console.log('thanks this is mouse down',e);
    e.preventDefault()
}


document.querySelector('.dummy4').addEventListener('mouseenter',function () {
 //   console.log('you entered Dummy class4')
})



document.querySelector('.dummy4').addEventListener('mouseleave',function () {
   // console.log('you EXITED Dummy class4')
})


document.querySelector('.container').addEventListener('mousemove',function (e) {
    console.log(e.offsetX, e.offsetY);
    //document.body.style.backgroundColor='red'
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},255)`
    console.log('you triggered mouse move event')
 })
 
 
 