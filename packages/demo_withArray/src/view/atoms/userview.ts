




const isEmptyObject = (value) =>{
  return value && value.constructor === Object && Object.keys(value).length === 0;
}
const userTeamplate =   (data:any):HTMLTemplateElement =>{
  console.log(isEmptyObject(data));
     
     let template:HTMLTemplateElement = document.createElement("template");
     template.innerHTML = `    
   <div class="col-sm-4">
     <!-- Begin user profile -->
   <div class="box-info text-center user-profile-2">
     <div class="header-cover">
       <img src="https://via.placeholder.com/350x280/87CEFA/000000" alt="User cover">
     </div>
     <div class="user-profile-inner">
       <h4 class="white">${data.name.first} ${data.name.last}</h4>
       <img src=${data.picture.thumbnail} class="img-circle profile-avatar" alt="User avatar">
         
       <!-- User button -->
 
     </div>
   </div>
 </div> `

 return template;
 
}

export default  (data:any)=>{
  if(!isEmptyObject(data)){
    let userview:HTMLTemplateElement =  userTeamplate(data);
    return userview.content.cloneNode(true);
  }
  else {
    return null;
  }

}

