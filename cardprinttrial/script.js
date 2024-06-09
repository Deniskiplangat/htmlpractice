const button = document.createElement('button')  //this is the print button
button.classList.add('printButton')
button.textContent = 'Print'

const entryContainer = document.getElementById('container')
const card = document.createElement('div') //this will be the card to print
card.classList.add('card')
card.classList.add('card', 'print');
card.setAttribute('id','printcard')
card.textContent = 'I failed the first quarter of a class in middle school, so I made a fake report card. I did this every quarter that year. I forgot that they mail home the end-of-year cards, and my mom got it before I could intercept with my fake. She was PISSED—at the school for their error. The teacher also retired that year and had already thrown out his records, so they had to take my mother’s “proof” (the fake ones I made throughout the year) and “correct” the “mistake.” I’ve never told her the truth.'




entryContainer.appendChild(card)
entryContainer.appendChild(button)

button.addEventListener('click',()=>{

    //this is the code that actually does the printing
    var prtContent = document.getElementById("printcard");
    alert('hello')

})






