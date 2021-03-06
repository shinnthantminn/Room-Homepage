const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const close = document.getElementById("close");
const blur = document.getElementById("blur");
const forStuck = document.getElementById("forStuck");

click(menuBtn);
click(close);
click(blur);

function click(x) {
    x.addEventListener("click",e=>{
        showHide(e);
    })
}

function showHide(x) {
    x.preventDefault();

    menu.classList.toggle("top-170");
    menu.classList.toggle("top-0");
    blur.classList.toggle("hidden")
    forStuck.classList.toggle("absolute");
    forStuck.classList.toggle("fixed")
}

/*for hover svg changes fill other color*/

const forFill = document.querySelector("#forFill");
const motherFill = document.querySelector("#motherFill");

motherFill.addEventListener("mouseenter",_=>{
    forFill.classList.toggle("fill-darkGray-100");
});

motherFill.addEventListener("mouseleave",_=>{
    forFill.classList.toggle("fill-darkGray-100");
});

/*slider*/
new Glide('.glide',{
    autoplay:5000,
    gap:0
}).mount()
