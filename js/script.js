document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".burger-menu").classList.toggle("burger-close")
    })
    document.getElementById("burger-menu").addEventListener("click", function() {
        document.querySelector(".burger-menu").classList.toggle("burger-close")
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("more").addEventListener("click", function() {
        document.querySelector(".friend__galery").classList.toggle("friend__more");
        document.querySelector(".galery__btn span:first-child").classList.toggle("span-none");
        document.querySelector(".galery__btn span:last-child").classList.toggle("span-none");
    })
})

