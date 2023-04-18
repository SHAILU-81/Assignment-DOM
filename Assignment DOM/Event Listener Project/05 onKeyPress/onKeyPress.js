let inputbox = document.getElementById("input-box");
let display = document.getElementById("display");
inputbox.addEventListener('keypress', function(a){
    display.innerText = 'you have pressed' + a.key
});


