import {GET} from "./server"
import store from "state/src/storemanager"
import {render} from "./view/render"

const storeManager = store.getInstance();

const apiUrl = "https://randomuser.me/api/?results=2";


const init =async()=>{
  let response = await GET(apiUrl);
    console.log(response);
    let param = {
        name:"peoplestore",
        state:response.results,
     }
    let userstore = storeManager.createStore(param);
    console.log(storeManager.getStore("peoplestore"))

    userstore.subscribe(render);
    render(response.results)

}


init();