import { StoreType } from "../src/store/types"
import {default as StoreManager} from "../src/storemanager"

const storeObj :StoreType={
    name:"mynew store",
    state:[{hello:"hi"},{hello:"buy"}],
}
let  manager = StoreManager.getInstance();

//Create a install of store manager and valdate its working.
 test("creating instance of store manager ",()=>{
    let store = manager.createStore(storeObj);
    expect(manager.getStore("mynew store").name).toBe(storeObj.name);

    let  manager2 = StoreManager.getInstance();


})
