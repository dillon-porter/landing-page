const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const nav = document.getElementsByClassName("nav-links")[0]

toggleBtn.addEventListener("click", function() {
    nav.classList.toggle('active')
})


