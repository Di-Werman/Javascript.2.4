// class -> .CLASS_NAME
//id ->#ID
// tag -> TAG_NAME

var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href','https://ya.ru')
a.setAttribute('title','Go to Yandex')
a.textContent = 'Yandex'


var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')

var hasClass = box2.classList.contains('box')
console.log(hasClass)

if (hasClass) {
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}