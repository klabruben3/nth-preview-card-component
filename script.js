const viewIcon = document.querySelector(".overlay img");
const overlay = document.querySelector(".overlay")

overlay.addEventListener('mouseenter', () =>{
    viewIcon.style.display = 'block';
    overlay.style.cssText += 'background-color: hsla(178, 100%, 50%, 0.5);';
    overlay.addEventListener('mouseleave', ()=>{
        viewIcon.style.removeProperty('display')
        overlay.style.cssText -= 'background-color: hsla(178, 100%, 50%, 0.5);';
    })
})

