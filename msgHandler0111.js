const CLIENT_TOKEN = process.env.WIT_TOKEN_CLIENT,
      fetch=require("node-fetch");
var responseContain;

module.exports={
messageHandler :function (payload){    
callWit(payload).then((res)=>{
  
  console.log("res:"+JSON.stringify(res));
  let data = {
          status:"success",
          message:{
          validation:"validMsg",
          payload:{
            value: "res"
            }
          }
        }
  
  console.log("dataPayload"+ JSON.stringify(data));
    
  return data ;
  
  }
)

  
}}

function callWit(data){
    const q = encodeURIComponent(data);
  const uri = 'https://api.wit.ai/message?v=1518190248669277&q=' + q;
  var auth = 'Bearer ' + CLIENT_TOKEN;//}
  let requestWit = new Promise ((resolve)=>{
    resolve(
      fetch(uri, {headers: {Authorization: auth}})
        .then(res=>res.json())
        .then((res)=>{
           console.log("WitResponse"+JSON.stringify(res))}
            )
        .catch((err)=>{
          console.error(err)
        })
    )
  })
  return requestWit
}