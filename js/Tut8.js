////For, While & Do while Loops in JavaScript .

//General loops: For, while, do while

//For loop: declaration and condition are writeen in one section only.

let a=34;
a +=1;
a++;
console.log(a)

for (let i=0; i<=10; i++){
    console.log(i)
}

//While

let j=0

while (j<10) {
    console.log(j)
    j++;/// if we do not write this condition then it will go in infinite loop.
}

// do while

let k=0;

do{

    console.log('this is K',k);
k++;
}
while(k<10)

// Difference between while and do while is : if we declare anything .i.e. initilaize variable by invalid number then it will run atleast one time. and then it will check the condition.

//so bascically output will be printed for 1st record.  to verify assign k=100 in above example and check the output.

///break and continue.

//Loops have 2 statement break and continue.

//if we want to stop iteration of loop then we can use break. Refer below example.


let l=0;

do{

  
    if(l===5){
        break
    }
    console.log('this is L',l);
l++;
}
while(l<10)

console.log('break done')

///Continue. If we want to skip any  iteration then use continue. refere below example.

let m=0;

do{

    if(m===6){
        m++
        continue
    }
    console.log('this is m',m)
m++
}while (m<10) 

console.log('continue')

///////////// we can use btreak and continue in For and While.


//////// loops which iterates arrays and objects

let arr=[1,2,3,4,5]
arr.forEach(function (element,index,array) {
    console.log(element,index,array) //we can pass 3 diff argument
})

//alternate way for forEach

for (let z = 0; z < arr.length; z++) {
    const element = arr[z];
    console.log(element)
}

//object


let obj={
    name: 'Shoaib',
    type: 'programmer',
    age:'24',
    OS: 'Windows'
    
}
//to iterate object and to print all its key value pair we can use below syntax.
for (let keyss in obj){

    //console.log(obj[keyss])
   console.log(`The ${keyss} of object is ${obj[keyss]} `)
    
}


