const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links  a")


for (item in menuItems) {
    if (currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}