let main = document.getElementsByTagName('main')[0]
let n = 0

function number(number) {
    n = number
}


function thanks() {
    if (n != 0) {
        main.innerHTML = ''
        let img = document.createElement('img')
        img.setAttribute('src', './img/illustration-thank-you.svg')
        main.style.textAlign = 'center'
        main.appendChild(img)  
        main.innerHTML += `<br><p id="feedback">You selected ${n} out of 5</p>`
        main.innerHTML += `<h1>Thank you!</h1>`
        main.innerHTML += `<p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`
    }else {
        alert('Please leave your feedback!')
    }
      
}
