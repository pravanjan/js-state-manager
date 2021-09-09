import userview from "./atoms/userview";
import { default as Button } from "../view/atoms/button";



export const render =(dataArray:any[])=>{
    document.querySelector("body").innerHTML = "";
    let parentDiv = document.createElement("div");
    parentDiv.className ="container bootstrap snippets bootdey";
    dataArray.forEach(el => {
        let child = userview(el);
        child!=null? parentDiv.appendChild(child):null
    });
    document.querySelector("body").appendChild(parentDiv);
  
  }

export  const AddButton  = (data, callback)=>{
    let button = Button(data,callback);
}

