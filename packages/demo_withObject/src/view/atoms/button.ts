import {StoreManager } from "js-state";
import dataJson from "../../utils.json"

const buttonTemplate = (data:any):HTMLTemplateElement=> {
   let template:HTMLTemplateElement = document.createElement('template');
   template.innerHTML = `
      <input class="btn btn-primary" type="button" value="${data.name}">
      `
      return template;


}

export default (data:any, actions)=>{
   let userStore = StoreManager.getInstance().getStore("peoplestore");
   let buttonTemp:HTMLTemplateElement = buttonTemplate(data);
   let button =  buttonTemp.content.firstElementChild.cloneNode(true);
   
   button.addEventListener("click",(event)=>{
      event.stopPropagation();
      userStore.dispatch(actions,dataJson.name);
   });
    return button;


}