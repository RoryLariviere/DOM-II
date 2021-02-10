// Your code goes here
const navigation = document.querySelector(`nav`);

//NAV LINK STYLING
Array.from(document.links).forEach(link => {
    link.addEventListener(`mouseover`, (e) => {
        e.target.style.color = `red`;
        setTimeout(()=>{
            e.target.style.color = ``;
        }, 500)
    })
})

//DARK AND LIGHT MODE
const darkMode = document.createElement(`button`);
const lightMode = document.createElement(`button`);
darkMode.classList.add(`dark`);
lightMode.classList.add(`light`);

darkMode.textContent = `Dark Mode`;
navigation.prepend(darkMode);

lightMode.textContent = `Light Mode`;
navigation.appendChild(lightMode);

function darker () {
    document.body.style.backgroundColor = `black`;
    document.body.style.color = `white`;
}

function lighter () {
    document.body.style.backgroundColor = `white`;
    document.body.style.color = `black`;
}

darkMode.addEventListener(`click`, darker);
lightMode.addEventListener(`click`, lighter);

//ONLINE EVENT
window.addEventListener(`online`, (e)=>{
    console.log(`You are now connected to the network.`);
})

//DOM CONTENT LOADED
window.addEventListener(`DOMContentLoaded`, (e)=>{
    console.log(`DOM fully loaded and parsed`);
})

//MOUSEOUT AND CHANGE BUTTON COLOR
const signUp = document.querySelectorAll(`.btn`);
Array.from(signUp).forEach(e => {
    e.addEventListener(`click`, ()=>{
        e.style.background = `green`;
        e.preventDefault();
    });
    e.addEventListener(`mouseout`, () => {
        console.log(`Moused out!`);
    })
}, true);

//TARGET CLICKS AND STOP PROPAGATION
Array.from(document.all).forEach(e=>{
    e.addEventListener(`click`, (event)=>{
        console.log(`Target: `, event.target);
        console.log(`Current Target: `, event.currentTarget);
        console.log(`\n`);
        event.stopPropagation();
    })
})

//KEYDOWN
document.addEventListener(`keydown`, (e)=>{
    if(e.key === "Escape"){
        window.close();
    }
})

//SCALABLE TO PREVENT DEFAULT
function zoom(e){
    e.preventDefault();
    scale =+ e.deltaY * -0.01;
    scale = Math.min(Math.max(.525, scale), 4);
    zoomPic.style.transform = `scale(${scale})`;
}

let scale = 1;
let zoomPic = document.querySelector(`div img`);
zoomPic.onwheel = zoom;