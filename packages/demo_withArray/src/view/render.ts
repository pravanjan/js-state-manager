import userview from "./atoms/userview";
import { default as Button } from "./atoms/button";
import { AddNew, deleteUser, updateUser } from "../useractions";
import * as styles  from "./css/app.css";


const container = document.querySelector(".listcontainer");
const buttonHolder = document.querySelector(".buttonHolder");
const styleEle = document.createElement('style');
styleEle.innerHTML = `${styles["default"][0][1]}`;
document.querySelector("body").appendChild(styleEle);




export  const AddButton  = (data, action)=>{
  let button = Button(data, action);
  console.log("The button ", button)
  return button;
}


const Addbutton  = {
  name:"Add new"
}


const deleteButton  = {
  name:"Delete"
}

const updateButton  = {
  name:"update"
}




export const render =(dataArray:any[])=>{
    document.querySelector(".listcontainer").innerHTML = "";
    let parentDiv = document.createElement("div");
    parentDiv.className ="container bootstrap snippets bootdey";
    dataArray.forEach(el => {
        let child = userview(el);
        child!=null? parentDiv.appendChild(child):null
    });
    container.appendChild(parentDiv);
    AddingButton();
  }

  const AddingButton=()=>{
    if(!document.querySelector(".btn.btn-primary")){
      buttonHolder.appendChild(AddButton(Addbutton, AddNew));
      buttonHolder.appendChild(AddButton(deleteButton, deleteUser));
      buttonHolder.appendChild(AddButton(updateButton, updateUser));

    
    }
   
  
  }
 