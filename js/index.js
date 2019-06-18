// Your code goes here
const nav = document.querySelectorAll('nav a');
nav[0].addEventListener('click', function (e) {
    e.target.style.color = 'cyan';
    e.stopPropagation();
});
nav[1].addEventListener('dblclick', function (f) {
    f.target.style.color = 'red';
    f.stopPropagation();
});
nav[2].addEventListener('mouseover', function (g) {
    g.target.style.color = 'purple';
    g.stopPropagation();
});
nav[3].addEventListener('contextmenu', function (h) {
    h.target.style.color = 'yellow';
    h.stopPropagation();
});
const para = document.querySelectorAll('p');
para[0].addEventListener('copy', function (i) {
    i.target.style.color = 'orange';
    i.stopPropagation();
});
para[1].addEventListener('mousemove', function (j) {
    j.target.style.color = 'pink';
    j.stopPropagation();
});
para[2].addEventListener('mouseup', function (k) {
    k.target.style.fontSize = '50px';
    k.stopPropagation();
});
para[3].addEventListener('mousedown', function (l) {
    l.target.style.color = 'crimson';
    l.stopPropagation();
});
para[4].addEventListener('mouseenter', function (m) {
    m.target.style.color = 'gold';
    m.stopPropagation();
});
console.log(para);
const pictures = document.querySelectorAll('img');

pictures.forEach(image => image.addEventListener('mouseover', event =>{
    event.target.style.border = '8px solid red';
    event.preventDefault();
}));
const links = document.getElementsByClassName('nav-link');
links.addEventListener('mouseover', function (g) {
});
event.preventDefault();