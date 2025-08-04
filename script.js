try{
    const response= await fetch('/api')
    const data= await response.json()
    renderCards(data)
}catch(err){
    console.log(err)
}
function renderCards(data){
    const cardContainer=document.getElementsByClassName('cards-container')[0];
    let cardsHTML='';
    data.forEach((card)=>{
        cardsHTML+=`
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
            </div>
        </article>`
    })
    cardContainer.innerHTML=cardsHTML;
}
function toggleNavBtn(){
    
}