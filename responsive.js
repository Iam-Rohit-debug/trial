
// alert("rohit");
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
rightnav = document.querySelector(".rightnav");

    burger.addEventListener("click" , function(){
        navlist.classList.toggle("v-nav-resp");
        // rightnav.classList.toggle("v-nav-resp");
        navbar.classList.toggle("h-nav-resp");
        // navbar.classList.add(".nav-bg");
    });

