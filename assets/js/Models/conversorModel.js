function conversorInputModel(text){
    return `
    <input id ="X1" class="field--conversor" type="number">
    <select id ="in_unit" class="field__unit--conversor">
        ${text.units.map(unit => {
            return `<option value="${unit.value}" ${unit.selected}>${unit.label}</option>`
        })}
    </select>
    `
}

function conversorOuputModel(text){
    return `
    <output id ="X2" class="field--conversor"></output>
    <select id ="out_unit" class="field__unit--conversor">
        ${text.units.map(unit => {
            return `<option value="${unit.value} ${unit.selected}">${unit.label}</option>`
        })}
    </select>
    `
}

export default function conversorModel(text){
    return `
        <h3 class="programm__title">${text.name}</h3>
        <div class="programm__form--conversor">
            <fieldset class="form__conversor" data-text="field-1">
                ${conversorInputModel(text)}
            </fieldset>

            <button class="btn__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"/></svg>
            </button>
            
            <fieldset class="form__conversor" data-text="field-2">
                ${conversorOuputModel(text)}
            </fieldset>
    `
}