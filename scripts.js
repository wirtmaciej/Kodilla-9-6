var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
var element = document.createElement('li');
element.innerHTML = 'item', ' ';
console.log(element);
var list__Items = document.getElementsByTagName('li');
console.log(list__Items);
var element__Number = list__Items.length;
console.log(element__Number);
element.innerHTML += ' ';
element.innerHTML += element__Number;
list.appendChild(element);

});