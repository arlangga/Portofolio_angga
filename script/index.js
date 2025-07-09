let menuNav = document.getElementById("menuNav") //tombol buka menu
let navbarMenu = document.getElementById("navbarMenu")//menu navbar
let closeMenu = document.getElementById("closeMenu")//tombol tutup menu
let navBar = document.getElementById("navBar") //navbar
let logo = document.querySelector('.logo span')//logo

// function buka navbar menu
menuNav.addEventListener('click', () =>{
    navbarMenu.classList.toggle("navHide")
    console.log("hello")
})

// event tutup menu navbar
closeMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('navHide')
})

// event otomatis tutup navbar
document.addEventListener("click", (e) => {
    if (!menuNav.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove("navHide")
    }
})

// event navbar ketika di scroll
document.addEventListener('scroll', () => {
    if(scrollY > 5){
        if(window.innerWidth <= 524){
            logo.style.color = "var(--acsent)"
            menuNav.style.color = "var(--second)"
        }  else{
            logo.style.color = "var(--second)"
        }
        
        navBar.classList.add("navScroll") 
    } else {
        if(window.innerWidth <= 524){
            logo.style.color = "var(--acsent)"
        } else{
            logo.style.color = "var(--primary)"
        }
        navBar.classList.remove("navScroll")
        menuNav.style.color = "var(--primary)"
    }

    
})