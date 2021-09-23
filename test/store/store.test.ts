import {default as Store} from "../../src/store/store"
import {callbcakType, actionCallbackType, StoreType} from "../../src/store/types"




const arrayType :StoreType={
    name:"mynew store",
    state:[{name:"kevin"},{name:"Bob"}],

}

const objectTypeState: StoreType = {
  name:"store",
  state:{name:"kevin",
  age:12,
  phone:"9522736637"
  }
}


const arrayEmptyState :StoreType={
  name:"mynew store",
  state:[],

}
const objectEmptyState :StoreType={
  name:"mynew store",
  state:{},

}
const actionArrayType:actionCallbackType = (state, payload)=>{
  state.push(payload)
 return state;
}

const actionObjectType:actionCallbackType = (state, payload)=>{
  state.value = payload;
  return state;
}



const action2:actionCallbackType = (state, payload)=>{
  state = payload;
  return state;
}

test("Store dispatch action called the subscribed function",()=>{    
  const mockedcallback = jest.fn(()=>{
    console.log("calling the callback");
  })
    let mystore = new Store(arrayType);
    mystore.subscribe(mockedcallback);
    mystore.dispatch(actionArrayType,{name:"me"})
    expect(mockedcallback.mock.calls.length).toBe(1);
})

test("validate the state object empty payload array type",()=>{    
  const mockedcallback = jest.fn(()=>{
    console.log("calling the callback");
  })
  let mystore = new Store(arrayEmptyState);
  mystore.subscribe(mockedcallback);
  mystore.dispatch(actionArrayType,{hello:"me"})
  expect(mockedcallback.mock.calls.length).toBe(1);
})

test("validate the state object empty payload object type",()=>{    
  const mockedcallback = jest.fn(()=>{
    console.log("calling the callback");
  })
  let mystore = new Store(objectEmptyState);
  mystore.subscribe(mockedcallback);
  mystore.dispatch(actionObjectType,"test")
  expect(mockedcallback.mock.calls.length).toBe(1);
})




/* This section validate the state manager for delete operation call both on 
array and object type 
*/

const actionArrayDeleteType:actionCallbackType = (state:any[], payload:any)=>{
  const isPresent  = (el) => el.name === payload.name;
   const index = state.findIndex(isPresent)
   console.log("isPresent",index);
   state.splice(index,1);
   console.log("state after deletion ",state);
   
 return state;
}


const actionObjectDeleteType:actionCallbackType = (state, payload)=>{
  delete state[payload]
  console.log("state after deletion ",state);
   
 return state;
}


test("validate delete operation on   arrayType",()=>{    
  const mockedcallback1 = jest.fn(()=>{
    console.log("calling the callback");
  })
  let mystore = new Store(arrayType);
  mystore.subscribe(mockedcallback1);
  mystore.dispatch(actionArrayDeleteType,{name:"kevin"})
  expect(mockedcallback1.mock.calls.length).toBe(1);
})



test("validate delete operation on   objectType",()=>{    
  const mockedcallback1 = jest.fn(()=>{
    console.log("This is a object type modification");
  })
  let mystore = new Store(objectTypeState);
  mystore.subscribe(mockedcallback1);
  mystore.dispatch(actionObjectDeleteType,"phone")
  expect(mockedcallback1.mock.calls.length).toBe(1);
})
