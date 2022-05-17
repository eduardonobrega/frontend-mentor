let btns = document.querySelectorAll('button')
let txt = document.querySelectorAll('button + p')


btns.forEach((e) => 
{
    e.addEventListener('click', clicou)
})

function clicou(e) {
    let btn = e.target
    
    if(btn.className) {
        btn.className = ''
    }else {
        btn.className = 'clicou'
    }
}