//Manipulating Websites Using JS Window Object.

let a =window;
console.log(a)

//window object is automatic global in js.
// alert and window.alert both are same. since window is global object in client side JS.

//prompt

// let b=prompt('this is prompt')
// console.log(b)

//confirm

// let c=confirm('are you sure')

// console.log(c)

//Note: Document is part of window Object

let d=window.document;
console.log(d)

let e=window.innerHeight;
e= innerHeight;
e=scrollX;
e=scrollY;
e=scrollbars
e=location;
e=location.reload;
e=location.toString();
e=history.length
//e=history.go(-1)//back button
//e=history.go(1)//next button
//we can write innerheight also. no need to write window.innerHeight
console.log(e)