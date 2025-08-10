try {
    const response = await fetch('/api')
    const data = await response.json()
    renderCards(data)
} catch (err) {
    console.log(err)
}
const renderAll = document.getElementsByClassName('nav-item')[0]
const renderActive = document.getElementsByClassName('nav-item')[1]
const renderInActive = document.getElementsByClassName('nav-item')[2]
const removeBtnList = document.querySelectorAll('.remove');
const ActiveBtnList = document.querySelectorAll('.ActiveBtn');
const themeToggle=document.querySelector('.theme-toggle');
const body=document.body;
// console.log(removeBtn)

let isActive = false;
let isInActive = false;
let isLight=true;


//Event Handlers
function renderCards(data) {
    const cardContainer = document.getElementsByClassName('cards-container')[0];
    let cardsHTML = '';
    data.forEach((card) => {
        cardsHTML += `
        <article class='card-article'>
        <div class='card-text'>
        <img src=${card.logo} alt=${card.name} />
        <div class='card-content'>
        <h3 class='card-title'>${card.name}</h3>
        <p class='card-description'>${card.description}</p>
        </div>
        </div>
        <div class='card-controls'>
        <button class='remove btn'>Remove</button>
        <label class="switch">
         <input type="checkbox" class="ActiveBtn">
         <span class="slider"></span>
        </label>
        </div>
        </article>`
    })
    cardContainer.innerHTML = cardsHTML;
}



// Event Listeners
window.addEventListener('load', () => {
    renderAll.classList.add('onActive');
    // console.log('content loading');
})
renderAll.addEventListener('click', () => {
    if (isActive || isInActive) {
        isInActive = false;
        isActive = false;
        renderActive.classList.remove('onActive');
        renderInActive.classList.remove('onActive');
        renderAll.classList.add('onActive');
    }
})
renderActive.addEventListener('click', () => {
    if (!isActive) {
        isActive = true;
        isInActive = false
        renderInActive.classList.remove('onActive');
        renderAll.classList.remove('onActive');
        renderActive.classList.add('onActive');
    }
})
renderInActive.addEventListener('click', () => {
    if (!isInActive) {
        isActive = false;
        isInActive = true;
        renderActive.classList.remove('onActive');
        renderAll.classList.remove('onActive');
        renderInActive.classList.add('onActive');
    }
})
removeBtnList.forEach((item, inx) => {
    const articleToRemove = item.parentElement.parentElement;
    item.addEventListener('click', () => {
        console.log('element deleted');
        articleToRemove.style.display = 'none'
    })
})
ActiveBtnList.forEach((item)=>{
    item.addEventListener("click",()=>{
        
    })
})
themeToggle.addEventListener('click',()=>{
    body.classList.toggle('dark')
    if(isLight){
        isLight=false;
        themeToggle.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#FBFDFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>`
    }else{
        isLight=true;
        themeToggle.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#091540" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>`
    }
})