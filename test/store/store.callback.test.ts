import {default as Store} from "../../src/store/store"
import {callbcakType, actionCallbackType, StoreType} from "../../src/store/types"


/** create store instance and provide a call back with parameter */
const mystore:StoreType = {
    name:"callback",
    state:[]
}
/** define a call back method with argument */

const mock_callback_argument = jest.fn((state, arg, arg1)=>{
    console.log("calling state",state);
    console.log("calling i",arg);
    console.log("calling ii ",arg1);

})

const mock_callback = jest.fn((state)=>{
    console.log("calling state",state);


})


/** define a action for adding new element to state */
const addNew:actionCallbackType = (state:string[], payload:any)=>{
    state.push(payload);
    return state;

}
const store = new Store(mystore)

test("validate callback function with specific arguments",()=>{
    store.subscribe(mock_callback_argument,"heelo", "hi");
    store.dispatch(addNew, {callback:"true"});
    expect(mock_callback_argument).toHaveBeenCalledWith(mystore.state,"heelo","hi");
})

/** checking for callback function without parameter */


test("validate callback function with noargs",()=>{
    store.subscribe(mock_callback);
    store.dispatch(addNew, {callback:"true"});
    expect(mock_callback).toHaveBeenCalledWith(mystore.state);
})
