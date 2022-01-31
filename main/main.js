// let hello = document.getElementById('hello');
// hello.innerHTML = '<h1>JavaScript</h1>';
// console.log(hello);


// ! не работает (appendChild)
// let newElem = document.createElement('div');
//     newElem.innerHTML = 'New Element';
//     newElem.style.color = 'red';
// let container = document.querySelector('.container');
//     container.appendChild(newElem);
//     console.log(newElem);
//! 

// console.log(typeof document.getElementById('title'));
// let title = document.getElementById('title');
// let list = document.getElementsByTagName('ul');
// let items = document.getElementsByClassName('item');
// let inp = document.getElementsByName('inp-name')
// console.log(inp);

// let title = document.querySelector('#title');
// let list = document.querySelectorAll('ul')
// let items = document.querySelectorAll('.item')
// let inp = document.querySelectorAll('[name="inp-name"]')
// console.log(inp);

// let items = document.getElementsByClassName('item');
// let items2 = document.querySelectorAll('.item')
// let list = document.getElementsByTagName('ul');
// list[0].innerHTML += '<li class="item">New elem</li>'
// console.log(list);
// console.log(items);
// console.log(items2);
// for(let i = 0; i < items2.length; i++){
//     console.log(items2[i]);
// }

// let example = document.getElementById('hello');
// example.innerText = 'New Data';
// console.log(example.innerText);
// let exam = document.getElementsByTagName('h2')
// let exam = document.querySelectorAll('h2')
// console.log(exam);
// exam.forEach(item => {
//     item.innerText = 'Hello World';
// })

// let items = document.querySelectorAll('.item');
// console.log(items);
// items.forEach((elem, index) => {
    // elem.innerHTML = `${elem.innerHTML} ${index + 1}`
    // elem.style.color = 'red';
//     if(index % 2 !==0 ){
//         elem.style.backgroundColor = 'pink';        
//     }
// });

// //! создание элемента

// let elem = document.createElement('div');
// elem.innerHTML = '<span>I am a new element</span>'

// //! добавление элемента


// container[0].appendChild(elem);
// elem.style.color = 'green';
// elem.style.fontSize = '25px';

// let container = document.querySelectorAll('.container');

// let elem1 = document.createElement('div');
// let elem2 = document.createElement('div');
// let elem3 = document.createElement('div');

// elem1.innerText = "Element 1";
// elem2.innerText = "Element 2";
// elem3.innerText = "Element 3";

// container[0].append(elem1);
// container[0].prepend(elem2);
// container[0].appendChild(elem3);

// ! удаление элемента 

// container[0].removeChild(elem1);

// ! добавление и удаление класса

// elem1.classList.add('foo');
// elem1.classList.remove('foo');
// elem1.classList.toggle('foo');

// let data = new Date().getHours();
// console.log(data);
// if(data > 12){
//     document.body.classList.add('theme-dark');
// }else{
//     document.body.classList.add('theme-light');
// }

// let res = prompt('Enter you name');
// let title = document.getElementById('title');
// title.innerText = `${title.innerText}, ${res}`;

//?  РАЗБОР 

// let hs = document.getElementsByTagName('h3');
// console.log(hs);
// for( i of hs){
//     i.innerText = '!!!'
//     i.style.color = 'green';
// }

// let list = document.getElementsByTagName('ul');
//     for(let i = 1; i <=30; i++){
//         let newItem = document.createElement('li');
//         newItem.innerText = `${i} - овечка`;
//         list[0].append(newItem);
//         newItem.style.listStyle = 'none'
//     }

// let spns = document.querySelectorAll('span')
// spns.forEach(item => {
//     item.classList.add('active')
// })

//? 

let books = [1, 2, 3, 4];
let shifted = books.shift();
console.log(books);
console.log(shifted);
