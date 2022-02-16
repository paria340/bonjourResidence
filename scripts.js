

modale = {};

modale.onSubmit = function(){
    const button = document.getElementById('button')
    button.addEventListener('click', function(event){
        console.log("hello")
    })
}

modale.init = function(){
    modale.onSubmit()
}
modale.init()