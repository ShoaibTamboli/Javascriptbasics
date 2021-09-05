//Arrays.

let marks=[40,50,60,70,80,85,90,95,99]; //numeric array

console.log(marks);

const fruits=['Apple','Banana','Grapes','Cherry','Papaya']; //string array

console.log(fruits)
console.log(fruits[1]);

const mixed=[20,30,'green', [0,1,'string']]

console.log(mixed);

const array1= new Array (10,20)//Array made from Array constructor 

console.log(array1[0])
console.log(array1.length)//.length is a property of array.

console.log(Array.isArray(marks))//isArray is a method hence we used round bracket ().


 array1[0]="Shoaib"; //we vcan update the array element
console.log(array1)///Array value has been chnaged from 10 to Shoaib

let arrElemt=array1[0]  ///arr[0] is stored in variable i.e stored in arrElemt
console.log('element: ',arrElemt)


///////////////////////////////

let value=marks.indexOf(60)

console.log(value) /// it will show the index position of the mentioned number in an array.


//mutating or modifying array

// marks.push(100) //push will add the element on the end of the array.

// console.log(marks)

// marks.unshift(500); //unshift will add the element on the front of the array i.e it will add it in starting of the array.
// console.log(marks)

// marks.pop()//pop will remove last elemet from the array
// console.log(marks)

// marks.shift()//shift will remove starting / initial  elemnet from array.
// console.log(marks)

marks.splice(1,4) //1st parameter is index of element and 2nd argument is the no.of deletions to be made in our case we removed the element from index 1 and its next 3 elements. so total 4 elements has been removed.
console.log(marks) 

marks.reverse()//reverse the array. Note that it is changing original value of array.
console.log(marks)

let marks2=[1,2,3,4,5]

mar=marks.concat(marks2)
console.log(mar)

console.clear();

////////////////////////////////////


////////////////Object////////////////


let myObject={
    'First name': 'shoaib',
    isActive: true,
    height: 170,
    score: [150,160,170,180,190]
}
console.log(myObject["First name"])
console.log(myObject)
console.log(myObject[`First name`])
console.log(myObject.height)
console.log(myObject['height'])