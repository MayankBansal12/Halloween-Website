/*=============== SHOW MENU ===============*/
const navMenu=document.querySelector(".nav-menu");
const navToggle=document.querySelector(".nav-toggle");
const navClose=document.querySelector(".close-btn");

navToggle.addEventListener("click",()=>{
    navMenu.classList.add("show-menu");
})
navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
})

/*=============== REMOVE MENU MOBILE ===============*/
const navList=document.querySelectorAll(".nav-list");
function LinkAction(){
    const navMenu=document.querySelector(".nav-menu");
    // Removing navMenu class when a new item is clicked
    navMenu.classList.remove("show-menu");
}
navList.forEach(n=>n.addEventListener("click",LinkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
