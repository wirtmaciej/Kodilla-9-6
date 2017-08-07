var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
var element = document.createElement('li');
element.innerHTML = 'item', ' ';
console.log(element);
var list__items = document.getElementsByTagName('li');
console.log(list__items);
var element__number = list__items.length;
console.log(element__number);
element.innerHTML += ' ';
element.innerHTML += element__number;
list.appendChild(element);

});