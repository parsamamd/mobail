let seek = document.getElementById('start-seek')
let seeks = document.querySelector('.box-seek')
let ext = document.getElementById('btn-ext')
let seekin =document.getElementById('seek')
let body =document.body
seek.addEventListener('click',function(){
    seeks.style.display = 'block'
    seekin.focus()
})
ext.addEventListener('click',function(){
    seeks.style.display = 'none'
    seekin.value = ''
    
})
seeks.addEventListener('keypress',function(event){
    let key = event.keyCode
    if(key == 13){
        seeks.style.display = 'none'
        seekin.value = ''
    }
})