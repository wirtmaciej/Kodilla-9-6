var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
var element = document.createElement('li');
element.innerHTML = 'item', ' ';
console.log(element);
var listItems = document.getElementsByTagName('li');
console.log(listItems);
var elementNumber = listItems.length;
console.log(elementNumber);
element.innerHTML += ' ';
element.innerHTML += elementNumber;
list.appendChild(element);

});