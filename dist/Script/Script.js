const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const close = document.getElementById("close");

menuBtn.addEventListener("click",e=>{
    showHide(e);
});

close.addEventListener("click",e=>{
    showHide(e);
});

function showHide(x) {
    x.preventDefault();

    menu.classList.toggle("top-170");
    menu.classList.toggle("top-0");
}