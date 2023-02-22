import descriptionModel from '../Models/descriptionModel.js'
import conversorModel from '../Models/conversorModel.js'
import text from './text.js'


let description = document.querySelector("[data-description]")
let tags = document.querySelectorAll("[data-tag]")
let conversor = document.querySelector("[data-conversor]")

tags = [...tags]
let activeTag = tags.filter(tag => tag.className.split(" ").indexOf('btn--active') !== -1)[0]
let type = activeTag.dataset.tag

description.innerHTML = descriptionModel(text.conversor[type])
conversor.innerHTML = conversorModel(text.conversor[type])

tags.forEach(tag => {
    tag.addEventListener("click", () =>{
        tag.classList.add('btn--active')
        type = tag.dataset.tag
        description.innerHTML = descriptionModel(text.conversor[type])
        conversor.innerHTML = conversorModel(text.conversor[type])
        
        tags.filter(button => button !== tag).forEach(item => {
            item.classList.remove('btn--active')
        })
    })
})

