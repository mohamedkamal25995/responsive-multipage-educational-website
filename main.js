//change navbar color onscroll

window.addEventListener(`scroll`,()=>{
    document.querySelector(`nav`).classList.toggle(`window-scroll`,window.scrollY>0)
})
//show/hide Ps


const faqs=document.querySelectorAll(`.faq`)
faqs.forEach(faq =>{
    faq.addEventListener(`click`,()=>{
    faq.classList.toggle(`open`)
        //change icon shape 
    let icon=faq.querySelector(`.faq__icon i`)
    if(icon.className===`uil uil-plus`)
    {
        icon.className=`uil uil-minus`
    }
    else{
        icon.className="uil uil-plus"
    }
    })
})
//show//hide 
const menu=document.querySelector(".nav__menu")
const menuBtn=document.querySelector("#open-menu-btn")
const closebtn=document.querySelector("#close-menu-btn")
menuBtn.addEventListener(`click`,()=>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    menuBtn.style.display="none";
    
})

//close nav menu
closebtn.addEventListener(`click`,()=>{
    menu.style.display="none";
    closebtn.style.display="none";
    menuBtn.style.display="inline-block";
})
