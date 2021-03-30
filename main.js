const parent__nav = Array.from(document.querySelectorAll(".parent__list__item"))
console.log(parent__nav)
parent__nav.forEach(parent => {
    parent.addEventListener("click", () => {
        console.log("parent has been clicked")
        parent.lastElementChild.classList.toggle("show__nav__list__child")
        parent.firstElementChild.classList.toggle("rotate__nav__first__child")
        console.log(parent.firstElementChild)
    })
})