import descriptionModel from '../Models/descriptionModel.js'
import solutionsModels from '../Models/solutionsModel.js'
import text from './text.js'


let description = document.querySelector("[data-description]")
let solutions = document.querySelector("[data-solutions]")
let tags = document.querySelectorAll("[data-tag]")

tags = [...tags]
let activeTag = tags.filter(tag => tag.className.split(" ").indexOf('btn--active') !== -1)[0]
let type = activeTag.dataset.tag

description.innerHTML = descriptionModel(text.solutions[type])
solutions.innerHTML = solutionsModels(text.solutions[type])

tags.forEach(tag => {
    tag.addEventListener("click", () =>{
        tag.classList.add('btn--active')
        type = tag.dataset.tag
        description.innerHTML = descriptionModel(text.solutions[type])
        solutions.innerHTML = solutionsModels(text.solutions[type])
        
        tags.filter(button => button !== tag).forEach(item => {
            item.classList.remove('btn--active')
        })
    })
})