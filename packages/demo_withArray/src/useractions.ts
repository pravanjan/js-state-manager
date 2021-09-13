
const apiUrl = "https://randomuser.me/api/?results=1";


/*This action add new object to our state array. Every time we call this action it automatically 
call the subscribe render method.
*/
export const AddNew = (state , payload)=>{
    console.log("Add Action");
    state.push(payload);
    return  state;
  }




/*This action delete object from our state array. Every time we call this action it automatically 
call the subscribe render method. */

export const deleteUser = (state , payload)=>{
    console.log("Delete Action")
    const isPresent  = (el) => el.login.uuid == payload.login.uuid;
    const index = state.findIndex(isPresent)
    console.log("isPresent",index);
    if(index >= 0){
         state.splice(index,1);
    }    
    return  state;
  }



/*This action update object from our state array. Every time we call this action it automatically 
call the subscribe render method. */

export const updateUser = (state, payload)=>{
    console.log("Update Action")
    state[0] = payload;
    return state;
}