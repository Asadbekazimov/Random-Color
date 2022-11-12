let items = document.querySelectorAll('.item img')
let img = document.querySelector('.img')
let body = document.querySelector('.body')

items.forEach(el => {
    el.addEventListener('click', function(){
        let attribute = this.getAttribute('src')
        img.setAttribute('src', attribute)
    })
})