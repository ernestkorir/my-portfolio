
const hamburger = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const close = document.querySelector('fa-times');

hamburger.addEventListener("click", () => {
    if(!menu.style.display || menu.style.display === "none") {
    document.querySelector(".menu").style.display = "block";
    } else {
    document.querySelector(".menu").style.display = "none";
    }
});

document.querySelectorAll(".menu").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".menu").style.display = "none";
    });
});

close.addEventListener("click", () => {
    document.querySelector(".menu").style.display = "none";
});