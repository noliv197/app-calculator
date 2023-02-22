export default function descriptionModel(text){
    return `
        <h2 class="description__title">${text.title}</h2>
        <p class="description__text">${text.description}</p>
        <br>
        <p class="description__equation"> ${text.equation} </p>    
    `
}