function switchMode() {
    let listTitles = document.querySelectorAll(".week-no")
    let links = document.getElementsByTagName("a")
    document.body.classList.toggle("dark-mode");

    for (let i = 0; i < listTitles.length; i++) {
        listTitles[i].classList.toggle("dark-mode")
    }

    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("dark-mode")
    }

}