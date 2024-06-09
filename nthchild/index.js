// const one = document.querySelector('.one')
// const two = document.querySelector('.two')
// const three = document.querySelector('.three')
// const four = document.querySelector('.four')
// const five = document.querySelector('.five')

const cards = document.querySelector('.cards')
const classes = ['left','active','right']

const setClasses = () => {
    const classes = ['left', 'active', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]))
}


const changePositions = (e) => {
    const clickedCard = e.currentTarget
    const activeCard = document.querySelector('.cards.active')
    if(clickedCard.classList.contains('active')) return;
    const classesFrom = e.currentTarget.className
    const classesTo = activeCard.className
    clickedCard.className = classesTo
    activeCard.className = classesFrom
}
cards.forEach(card => {
    card.addEventListener('click',changePositions)
});
setClasses();

// for (i=0;i<dataarray.length;i++){
//     dataarray[i].classList.add('class3')
//     newcards.appendChild(dataarray[i])
// }