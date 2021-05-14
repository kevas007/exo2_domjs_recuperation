//1
let myBody = document.getElementsByTagName('body')[0];

//2
console.log(myBody.firstElementChild);

//3
console.log(myBody.lastElementChild);

//4
let divExo = document.getElementsByTagName('div')[0];
let children = divExo.children;
console.log(children);

//5
let li = document.getElementsByTagName('li')[0];
let next = li.nextElementSibling;
console.log(next);

//6
let previousLi = next.previousElementSibling;
console.log(previousLi);