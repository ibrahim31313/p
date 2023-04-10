//## Start of header ##
//-Select the nav li's
let headerLisArr = Array.from(document.querySelectorAll(".ul li"));

headerLisArr.forEach((li)=> {
    li.addEventListener("click", (e)=> {
        //-Remove all active class from all li's
        headerLisArr.forEach((li)=> {
            li.classList.remove("active")
        })
        //-Put the active classe int the current clicked li
        e.currentTarget.classList.toggle("active");

    })
})

//-Select the i's(icons) into the menu-icon div
let headerIconsArr = Array.from(document.querySelectorAll(".menu-icon i"));
let headerNav = document.querySelector("nav")


headerIconsArr.forEach((icon, index, arr)=> {
    icon.addEventListener('click', (e)=> {
        headerIconsArr.forEach((icon)=> {
            //-Toggle the active class between the i's(icons)
            icon.classList.toggle("active")

            console.log(index)
            if(index == 0) {
                headerNav.classList.add("active")
            }else {
                headerNav.classList.remove("active")
            }
        })
    })
})

//- Change header & it elements color when scrolling
const header = document.querySelector(".header");
const homeSection = document.querySelector(".home");

const homeSectionOptions = { 
    rootMargin: "-200px 0px 0px 0px"
};

const homeSectionObserver = new IntersectionObserver(function(entries, homeSectionObserver) {
    entries.forEach((entry)=> {
        console.log(entry)
        console.log(entry.target)
        if (entry.isIntersecting === false) {
            console.log("is not interacting !!")
            header.classList.add("nav-scroll")
        }else {
            console.log("it's  interacting !")
            header.classList.remove("nav-scroll")
        }
    })
}, homeSectionOptions)

homeSectionObserver.observe(homeSection)

//## Start of projects section ##

let projectBtns = Array.from(document.querySelectorAll(".project-btn"));
let overlays = Array.from(document.querySelectorAll(".overlay"))

projectBtns.forEach((projectBtn)=> {
    projectBtn.addEventListener("click", (e)=> {
        //-Show or hide the overlay for each project button clicked
        overlays[e.currentTarget.dataset.order - 1].classList.toggle("active")
    })
})
