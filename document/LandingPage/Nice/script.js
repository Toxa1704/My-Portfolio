document.querySelector('.burger').addEventListener('click',() =>{
    const menu = document.querySelector('.nice-nav-list');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
    
})