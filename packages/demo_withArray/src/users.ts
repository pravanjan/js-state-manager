import {GET} from "./server"
import  {StoreManager } from "js-state"
import {render} from "./view/render"

console.log(StoreManager)

const storeManager = StoreManager.getInstance();

const apiUrl = "https://randomuser.me/api/?results=2";


const init =async()=>{
  //get the list of user in this case 2 user
  let response = await GET(apiUrl);
   //Create sotore object with name and user list i.e reposne.results
    let param = {
        name:"peoplestore",
        state:response.results,
     }
    let userstore = storeManager.createStore(param);
    //Subscribe the render method so that it change when the array object change its props 
    userstore.subscribe(render);
    //fist render the obtained reponse.
    render(response.results)

}


init();