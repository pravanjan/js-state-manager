import { StoreType } from "../src/store/types"
import {StoreManager} from "../src/storemanager"

const storeObj :StoreType={
    name:"mylist",
    state:[{hello:"hi"},{hello:"buy"}],
}
let  manager = StoreManager.getInstance();


//Create a install of store manager and valdate its working.
 test("creating and verify store in manager ",()=>{
    let store = manager.createStore(storeObj);
     expect(manager.getStore("mylist").name).toBe(storeObj.name);
})

test("return null if no store exist ",()=>{
    expect(manager.getStore("notpresent")).toBe(null);
})