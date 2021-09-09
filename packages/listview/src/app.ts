import {GET} from "./server"
import store from "state/src/store/store"
import {render, AddButton } from "./view/render"
import dataJson from "../src/utils.json"

const apiUrl = "https://randomuser.me/api/?results=2";

const AddNew = (state , payload)=>{
  state.push(payload) ;
  return   state;

}
const buttonText = {
  name:"Add User"
}

const init =async()=>{
  AddButton()
  let response =await GET(apiUrl);
    console.log(response);
    render(response.results)
    let param = {
        name:"people",
        state: response.results
    }
    let mystore = new store(param);
    mystore.subscribe(render)

    mystore.dispatch(AddNew,dataJson);
}


init();