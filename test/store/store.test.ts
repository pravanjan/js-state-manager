import {default as Store} from "../../src/store/store"
import {callbcakType, actionCallbackType, StoreType} from "../../src/store/types"




const storeObj :StoreType={
    name:"mynew store",
    state:[{hello:"hi"},{hello:"buy"}],

}

const action1:actionCallbackType = (state, payload)=>{
   state.push(payload)
  return state;
}

const mockedcallback = jest.fn(()=>{
  console.log("calling the callback");
})

const action2:actionCallbackType = (state, payload)=>{
  state = payload;
  return state;
}

test("Store dispatch action called the subscribed function",()=>{    
    let mystore = new Store(storeObj);
    mystore.subscribe(mockedcallback);
    mystore.dispatch(action1,{hello:"me"})
    expect(mockedcallback.mock.calls.length).toBe(1);
})

// test("check to validate the state object empty payload",()=>{    
//   let mystore = new Store(storeObj);
//   mystore.subscribe(callback);
//   expect(mystore.dispatch(action2,{})).toBe(mystore.state);
// })