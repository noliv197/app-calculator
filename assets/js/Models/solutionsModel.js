export default function solutionsModels(text){
    return `
    ${text.inputs.map(input => {
        return `
            <div class="field__container">
                <label for="${input.value}" class="field__legend">${input.title}</label>
                <input id ="${input.value}" class="field--solutions" type="number" placeholder="${input.placeholder}" ${input.required}>
            </div>
        `
    }).join('')}
    <button class="btn btn__secondary">Calculate</button>
    `
}