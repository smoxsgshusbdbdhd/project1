let btnGreen = document.getElementById('btnGreen');
let btnOrange = document.getElementById('btnOrange');
let btnPurple = document.getElementById('btnPurple');
let screen = document.getElementById('screen');

btnGreen.addEventListener('click', function() {
    screen.style.backgroundColor = 'green';
})

btnOrange.addEventListener('click', function() {
    screen.style.backgroundColor = 'orange';
})

btnPurple.addEventListener('click', function() {
    screen.style.backgroundColor = 'purple';
})
