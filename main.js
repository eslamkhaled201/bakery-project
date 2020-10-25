let toggler = document.querySelector('.toggle-bar');
let navLinks =document.querySelector('.nav_links');


document.querySelector('.toggler').addEventListener('click' ,()=>{
    toggler.classList.toggle('toggle');
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove("open")
        navLinks.classList.add('close');
    }else{
        navLinks.classList.remove("close")
        navLinks.classList.add('open');
    }
})
/* fa-times */