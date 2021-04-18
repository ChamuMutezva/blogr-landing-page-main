const parent__btn = Array.from(document.querySelectorAll(".parent__list__item--btn"))
const open__menu = document.querySelector(".open__menu")
const close__menu = document.querySelector(".close__menu")
const nav__list__container =  document.querySelector(".nav__list__container")
console.log(nav__list__container)

open__menu.addEventListener("click", () => {
    close__menu.classList.toggle("js__close__menu")
    open__menu.classList.toggle("js__open__menu")
    nav__list__container.classList.toggle("show__nav__list__container")
})

close__menu.addEventListener("click", () => {
    close__menu.classList.toggle("js__close__menu")
    open__menu.classList.toggle("js__open__menu")
    nav__list__container.classList.toggle("show__nav__list__container")
})

/*
parent__btn.forEach(btn => {
    
    btn.addEventListener("click", () => {
        console.log(btn.nextElementSibling)
        btn.nextElementSibling.classList.toggle("show__nav__list__child")
        btn.firstElementChild.classList.toggle("rotate__nav__first__child")
        
    })
}) */
