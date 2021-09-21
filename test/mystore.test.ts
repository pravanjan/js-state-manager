import {default as Store} from "../src/store/store"
import {callbcakType, actionCallbackType, StoreType} from "../src/store/types"




const storeObj :StoreType={
    name:"mynew store",
    state:[{hello:"hi"},{hello:"buy"}],

}

const action1:actionCallbackType = (state, payload)=>{
   state.push(payload)
  return state;
}
var callback:callbcakType = (state)=>{
  console.log("inside callback",state);
}

const action2:actionCallbackType = (state, payload)=>{
  state = payload;
  return state;
}

test("check to validate the state object as array type",()=>{    
    let mystore = new Store(storeObj);
    mystore.subscribe(callback);
    mystore.dispatch(action1,{hello:"me"})
    //expect(mystore.dispatch(action1,{hello:"me"})[0].hello).toBe(storeObj.state[0].hello);
})

// test("check to validate the state object empty payload",()=>{    
//   let mystore = new Store(storeObj);
//   mystore.subscribe(callback);
//   expect(mystore.dispatch(action2,{})).toBe(mystore.state);
// })