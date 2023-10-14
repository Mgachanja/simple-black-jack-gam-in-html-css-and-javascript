//set my variables
let player ={
  name:"mark gachanja ngari",
  chips:150
}
 let cards = []
 let sum = 0
 let hasBlackjack = false
 let isAlive = false
 let message = 0
 let messageEl=document.getElementById("message-el")
 let sumEl=document.getElementById("sum-el")
 let cardsEl=document.getElementById("cards-el")
 let newCard=document.getElementById("newGame-el")
 let playerEL=document.getElementById("player-el")
 playerEL.innerText=player.name + ":"+ player.chips +"$"

//random card generation
function getRandomCard(){
  let n = Math.floor(Math.random() * 13) +1
  if(n ===1){
    return 11
  }
  else if(n>10){
    return 10
  }
  else{
    return n
  }
  
}
//first round of the game
function startGame(){
  isAlive = true
  let firstCard= getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard,secondCard]
  sum = firstCard+secondCard
 
  renderGame()
}
//main logic of the game
 function renderGame(){
  cardsEl.textContent = " cards :"
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i]+ " "
    
  }
 if(sum=== 21){
    message = "You got blackjack king"
    player.chips = player.chips+10
    
 }
else if(sum < 21){
  message = "would you like to draw another card" 
  
  
}
else{
    message = "you lost.Go home !!!!!!"
    player.chips=player.chips-10
}
sumEl.textContent= "sum :"+ sum
cardsEl.textContent = " cards :" + cards + " "
messageEl.textContent =message
playerEL.innerText=player.name + ":"+ player.chips +"$"
}
//third card collection
function newGame() {
   if(isAlive===true&&hasBlackjack===false){
    let thirdCard= getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
  renderGame()
  if(sum === 21){
    hasBlackjack=true
    isAlive=false
  }
  else if(sum>21){
    hasBlackjack=false
    isAlive=false
  }
  else{
    hasBlackjack=false
    isAlive=true
  }

   }
}

