export default class MessageView {
    constructor(element) {
       this._element = element;
    }
    
   template(model) {
       return model.text ? `<span class="message__notification">${model.text}</span>` : '<span></span>';
   }

   update(model) {
    this._element.innerHTML = this.template(model);
    }
}