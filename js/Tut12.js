// Exercise 1:

// YOu have to create a variable which is a string containing the text which is a link which you are interested in.

// You have to fetch the link from a given page which cotains this text

let a = document.links;
Array.from(a).forEach(function(element){
    let href = element.href
    if(href.includes("blog")){
        console.log(href);
    }else{
        console.log("Doesn't include the word 'blog'.");
    }
})
//Other way
console.log(`Exercise 1 Solution`);

let a = document.links;

let myText = 'harry';

Array.from(a).forEach(function (element) {
    if (String(element).includes(myText)) {
        console.log(element);
    }
});

