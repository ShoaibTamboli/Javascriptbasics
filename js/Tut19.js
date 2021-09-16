//Local & Session storage in JavaScript



localStorage.setItem('name','shoaib') //.setItem to set / add a key value pair inside local storage.
localStorage.setItem('name2','shoaibTamboli')

console.log(typeof(localStorage))


//localStorage.removeItem('name2')     //clear a particular key value pair.

let name=localStorage.getItem('name2') ///.getItem to get/retrive the item from local storage.
console.log(name)


//localStorage.clear(); //It will clear the localstorage.


//We cannot add arrays. TO overcome this limitation we can do as below:

let vegArray=['ginger','Onion','potato']
//console.log(vegArray)
localStorage.setItem('sabzi',vegArray)

localStorage.getItem('sabzi')
//console.log(localStorage) ///since it is considering this as String. To store this we can use json.stringify and json.parse
let fruitArray=['apple','banana','jackfruit']
localStorage.setItem('fruit',JSON.stringify(fruitArray))

console.log(localStorage)
let showOP=localStorage.getItem('fruit')
console.log(showOP,typeof(showOP))//its a String type.

//To convert above in Array we will use Json.Parse


let thingArray=['Table','fan','stool']
console.log(thingArray,typeof(thingArray))

localStorage.setItem('Things',thingArray)
localStorage.setItem('Things',JSON.stringify(thingArray))

let thingOP=localStorage.getItem('Things')
thingOP=JSON.parse(localStorage.getItem('Things'))  ///JSON.Parse will be used in .getItem 
console.log(thingOP,typeof(thingOP))

//Note: whenever we want to store into localstorage use Json.Stringify . it will take Object as input and will return String.

//to Retrive use Json.parse, Json.parse will take string as an arugument and return an Object



////////////SESSION STORAGE///////////////////

