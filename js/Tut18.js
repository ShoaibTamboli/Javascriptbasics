//Smart Page Crawler In JS Exercise1: Solution

// Exercise 1:

// YOu have to create a variable which is a string containing the text which is a link which you are interested in.

// You have to fetch the link from a given page which cotains this text

// let str = 'java';
// let link = document.links;
// let href;

// Array.from(link).forEach(function (element) {
//     href = element.href;

//     if (href.includes(str)) {
//         console.log(href)
//     }
// })
// console.log(link)

let str1 = "harry";
let link1 = document.links;
let href1;

Array.from(link1).forEach(function (element) {
    href1 = element.href;

    if (href1.includes(str1)) {
        console.log(href1)
    }
})