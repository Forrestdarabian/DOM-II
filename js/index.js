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
    k.target.style.color = 'brown';
    k.stopPropagation();
});
para[3].addEventListener('mousedown', function (i) {
    i.target.style.color = 'crimson';
    i.stopPropagation();
});
para[4].addEventListener('mouseenter', function (j) {
    j.target.style.color = 'gold';
    j.stopPropagation();
});
para[5].addEventListener('mouseleave', function (k) {
    k.target.style.color = 'silver';
    k.stopPropagation();
});
console.log(para);