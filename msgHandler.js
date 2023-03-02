const CLIENT_TOKEN = process.env.WIT_TOKEN_CLIENT,
      fetch=require("node-fetch");

var responseContain;

module.exports={
messageHandler :function (payload){
let intent = payload.intents[0].name,
    intentConfidence = payload.intents[0].confidence;
  
  switch(intent){
    case 'Greeting':
      if (intentConfidence>0.984){
    return "Hola, estoy aprendiendo a procesar el lenguaje"
      }else{
        return "no te entiendo, pero sigo aprendiendo"
      }
  }    
//return JSON.stringify(payload)
}}