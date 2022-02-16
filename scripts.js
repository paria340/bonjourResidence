

modale = {};

const button = document.getElementById('button')
const popupModale = document.getElementById('popupModale')
const bodyBlackout = document.getElementById('bodyBlackout')

modale.onClick = function(){
    button.addEventListener('click', function(){
        popupModale.classList.add('isVisible')
        bodyBlackout.style.display='inherit'
        bodyBlackout.classList.add('bodyBlackout')
    })
}

modale.close = function(){
    const close = document.getElementById('close')
    close.addEventListener('click', function(){
        popupModale.classList.remove('isVisible')
        bodyBlackout.classList.remove('bodyBlackout')
    })
}

modale.init = function(){
    modale.onClick()
    modale.close()
}
modale.init()