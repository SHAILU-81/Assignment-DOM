let container = document.getElementById('container');
let display = document.getElementById('display');

// adding a keydown event listener to the document
document.addEventListener('keydown', function(a) {
display.style.color = 'yellow';
display.innerText = a.key + 'is keydown';
});

// adding a keyup event listener to the document
document.addEventListener('keyup', function(a) {
    display.style.color = 'green';
    display.innerText = a.key + "is keyup"
});