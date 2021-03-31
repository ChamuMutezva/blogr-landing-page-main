const parent__btn = Array.from(document.querySelectorAll(".parent__list__item__btn"))
console.log(parent__btn)
parent__btn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("parent has been clicked")
        btn.nextElementSibling.classList.toggle("show__nav__list__child")
        btn.firstElementChild.classList.toggle("rotate__nav__first__child")
        // console.log(parent.firstElementChild)
    })
})