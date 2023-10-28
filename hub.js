"use strict"
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay")
const btnShow=document.querySelector(".btn--show-modal")
const btnClose=document.querySelector(".btn--close-modal")

btnClose.addEventListener("click",function(e){
e.preventDefault()
modal.classList.add("hidden")
overlay.classList.add("hidden")
})
overlay.addEventListener("click",function(e){
    e.preventDefault()
modal.classList.add("hidden")
overlay.classList.add("hidden")
})
// btnShow.forEach((el)=>{
//     el.addEventListener("click",function(e){
//         e.preventDefault();
//         modal.classList.remove("hidden")
//         overlay.classList.remove("hidden")
//         console.log("test")
//     })
    
// })

btnShow.addEventListener("click",function(e){
    e.preventDefault()
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    
    })
    window.addEventListener("keydown",function(e){
        e.preventDefault ()
        if(e.key==="Enter"){         
modal.classList.add("hidden")
overlay.classList.add("hidden")
        }
    })


const nav=document.querySelector(".nav");
const navLinks=document.querySelector(".nav__links");
const navLink=document.querySelector(".nav__item");
const navLogo=document.querySelector(".nav__logo")

 navLinks.addEventListener("click",function(e){
    e.preventDefault()
    if(e.target.classList.contains("nav__item")){
        const id=e.target.getAttribute("href")
        console.log(id)
        document.querySelector(id).scrollIntoView({behavior:"smooth"})
    }
// console.log(navLinks)
 })





    
