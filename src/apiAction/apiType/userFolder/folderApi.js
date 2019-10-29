import util from "../../axios/utility";
import { eventChannel, END } from 'redux-saga';
// import throttle from 'lodash.throttle';
export function getFolderData(data) {
  const reqHeaders = { "Content-Type": "" };
  return util.networkMain
    .post("/createFolder", data, { headers: { "Content-Type": "" } })
    .then(res => {
      
      return res;
    })
    .catch(err => err);
}

export function getUserFolderData(data) {
  return util.networkMain
    .get("/getfolder", data)
    .then(res => {
      return res;
    })
    .catch(err => err);
}

export function getUserFolderFilesData(data) {
  return util.networkMain
    .post("/project", data)
    .then(res => {
      return res;
    })
    .catch(err => err);
}

export function uploadUserFolderData(data) {
  return eventChannel(emitter => {
    const progcallback= 
      (progress)=>{
     if(progress.total>1 && progress.loaded>1 )
     { const progressPercentage = parseInt((progress.loaded / progress.total)*100);
      console.log(progressPercentage)   
        
        emitter({ progressPercentage }); 
     }
     else
     {
      emitter({ progressPercentage:0 }); 
     } 
      
    } 
    
   util.networkMain
    .postWithProgress("/uploadimage", data, {
      headers: { "Content-Type": "multipart/form-data" }
    },    
  
    progcallback
    )
    .then(res => {
     
      emitter({ res });  
      emitter({ END });  
    })
    .catch(err => 
      {
        emitter({ err }); 
          

      }
      
      
      );

      return () => {
   
      }
      
  })
}

