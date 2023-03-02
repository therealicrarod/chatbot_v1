'use strict'

const CLIENT_TOKEN = process.env.WIT_TOKEN_CLIENT;
const ADMIN_TOKEN = process.env.WIT_TOKEN_ADMIN;
const async = require("async"),
      fetch = require("node-fetch"),
      entitiesPr = require("./process/entities.js"),
      intentsPr = require("./process/intents.js"),
      traitsPr = require("./process/traits.js");

module.exports={
  witResponse :  function (payload) {
    call2Wit(payload);
  }
}

  
function call2Wit (payload){
    const q = encodeURIComponent(payload);
const uri = 'https://api.wit.ai/message?v=1518190248669277&q=' + q;
  var auth = 'Bearer ' + CLIENT_TOKEN;//}
 fetch(uri, {headers: {Authorization: auth}})
  .then(res=>createRes(res))  
  }


//createRes

//function adminWitResponse (payload){
//  let entities = entitiesPr.entitiesProcess(payload.entities),
 //     intents = intentsPr.intentsProcess(payload.intents),
 //     traits = traitsPr.traitsProcess(payload.traits),
 //     traitRes,intentRes;
  
//  switch (traits) {
//    case "default":
      
//  }
  
//}