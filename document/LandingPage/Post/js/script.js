const burgerMenu = document.querySelector('.header-burger-menu');
const headerMenu = document.querySelector('.header-menu');
const headerMenuList = document.querySelectorAll('.header-menu-list>a');
const checkOut = document.querySelector('.check-out');
const sendingBtns = document.querySelector('.sending-btns')
const natural = document.querySelector('.natural');
const business = document.querySelector('.business');
console.log(headerMenuList);


burgerMenu.addEventListener('click',() =>{
    headerMenu.style.display = 'block'
    console.log('ok');
})
headerMenuList.forEach(link => {
  link.addEventListener('click', (event) => {
    headerMenu.style.display = 'none'
console.log('link ok');
  });
});

checkOut.addEventListener('click', () => {
  sendingBtns.style.display = 'block'
})
natural.addEventListener('click', () => {
  sendingBtns.style.display = 'none'
})
business.addEventListener('click', () => {
  sendingBtns.style.display = 'none'
})
