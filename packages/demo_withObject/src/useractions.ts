





export const updateUser = (state, payload)=>{
    console.log("Update Action",payload)
    state.name = payload;
    return state;
}