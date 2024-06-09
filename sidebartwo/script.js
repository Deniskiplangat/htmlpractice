const sidebar = document.getElementById('sidebar')
const cancelbtn = document.getElementById('cancel')
const menuhidden = document.getElementById('menuhidden')
console.log(menuhidden)

cancelbtn.addEventListener('click',()=>{
    sidebar.style.display = 'none'
    menuhidden.style.display = 'block'
    

})
menuhidden.addEventListener('click',()=>{
    sidebar.style.display = ''
    menuhidden.style.display = 'none'
    menuhidden.style.transition = '2s'
})
