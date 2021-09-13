import userview from "./atoms/userview";
import { default as Button } from "./atoms/button";
import { updateUser } from "../useractions";

const container = document.querySelector(".listcontainer");
const buttonHolder = document.querySelector(".buttonHolder");



export  const AddButton  = (data, action)=>{
  let button = Button(data, action);
  return button;
}


const updateButton  = {
  name:"update"
}




export const render =(data:any)=>{
    document.querySelector(".listcontainer").innerHTML = "";
    let parentDiv = document.createElement("div");
    parentDiv.className ="container bootstrap snippets bootdey";
    console.log(data);
    let child = userview(data);
    child!=null? parentDiv.appendChild(child):null
    
    container.appendChild(parentDiv);
    AddingButton();
  }

  const AddingButton=()=>{
    if(!document.querySelector(".btn.btn-primary")){
      buttonHolder.appendChild(AddButton(updateButton, updateUser));
    }
   
  
  }
 