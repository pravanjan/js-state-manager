const buttonTemplate = (data:any):HTMLTemplateElement=> {
   let template:HTMLTemplateElement = document.createElement('template');
   template.innerHTML = `
   
   <input class="btn btn-primary" type="button" value="${data.name}">

   `

   return template;


}

export default (data:any,callback)=>{
    let buttonTemp:HTMLTemplateElement = buttonTemplate(data);
    return buttonTemp;

   // buttonTemp.content.firstElementChild.addEventListener("click",callback);

}