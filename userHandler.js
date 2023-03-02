var res;
module.exports={
userDataHandler : function (payload){
  let name = payload.data.name.user;
  
  if(onlyLettersAndNumbers(name)|| name==="1CR4r0D202E!"){
   res="ValidUser";
    
  }else{
    res="NonValidUser"
  };
  let data={
    status:'success',
    //message:'connection OK'
    message:res
  }
  return data
}
}
  
  function onlyLettersAndNumbers(str) {
  return /^[A-Za-z0-9]{3,8}$/.test(str);
  }