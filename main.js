const hamIcon = document.getElementById("ham-icon");
const menu = document.getElementById("menu");
const hamDivs = Array.from(document.querySelectorAll("#ham-icon div"))


hamIcon.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    hamDivs[0].classList.toggle("active-div1");
    hamDivs[1].classList.toggle("active-middle-div");
    hamDivs[2].classList.toggle("active-div3");
});

document.addEventListener("click", (e) => {
    if(hamDivs[0].classList.contains('active-div1') && e.target.parentNode.id !== 'ham-icon')
    {
        menu.classList.toggle("active-menu");   
        hamDivs[0].classList.toggle("active-div1");
        hamDivs[1].classList.toggle("active-middle-div");
        hamDivs[2].classList.toggle("active-div3");        
    }
})


const customerCardContainer = document.querySelector('.customers-container');

customerCardContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains("customer-card"))
    {
        e.target.classList.toggle("rot");
    }
})
