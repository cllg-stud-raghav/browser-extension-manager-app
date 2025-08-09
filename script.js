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
// console.log(removeBtn)
let isActive = false;
let isInActive = false;


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