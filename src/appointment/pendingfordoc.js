import * as React from 'react';
import {useEffect,useState } from 'react';
import Cookies from 'js-cookie';
//Front Page After Doctor Logs In

function Confirmforpat() {

const now=Cookies.get('DocAbhishekName');
const now1=Cookies.get('DocAbhishekEmail');

const [runing,setruning]=useState(2); 
const [fulldata,setfulldata]=useState({
  fulldata:[]
}); 

const[re,reload]=useState(0);
const[re1,reload1]=useState(0);
const[re2,reload2]=useState(0);

const[time,settime]=useState("");
const [mssg,setmsg]=useState({
  mssg1:""
})

const massg=(e)=>{
  setmsg({
    mssg1:"-->( Enter Your Time just in case if your are not comfortable with Patient's time )",
  })
} 
const funn=(e)=>{
  settime(e.target.value);
}


const[_id,del_id]=useState("");
const[request,setrequest]=useState("Fetch");

  const initiateDelete=(e)=>{
    const targeted=e.target.value;
    del_id(targeted);
    settime(time);
    setrequest("Delete");
    setruning(2);
    window.alert("Appointment Has Been Cancelled");
    window.location.href="http://localhost:3000/docc1";
  }  


const updata=(e)=>{
  const targetedd=e.target.value;
  del_id(targetedd);
  settime(time);
  setrequest("updata");
  setruning(2)
  window.alert("out team will reach out soon to confirm the payment");
 

}


useEffect(() => {
  if(runing===2){
    if(request==="Fetch")
    {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mail:now1})
    };
    fetch('http://localhost:8001/docpend',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setfulldata({fulldata:jsonRes}));  
  }
  else if(request==="updata"){

    if(time==="")
    {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:_id,pay:"In-Process"})
  };
  fetch('http://localhost:8001/updatadoc',requestOptions )
  .then(response => response.json()).then(reload(re+1));
  
 }

  else {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ datass:time,id:_id,pay:"In-Process"})
  };
  fetch('http://localhost:8001/updatadocchange',requestOptions )
  .then(response => response.json()).then(reload1(re1+1));

  }

  }
  else{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:_id})
  };
  fetch('http://localhost:8001/delforall',requestOptions ).then(reload2(re2+1));
   
  }

  }
  setruning(4);


});

if(re===1){
  window.location.href="http://localhost:3000/docc1";
}
else if(re1===1){
  window.location.href="http://localhost:3000/docc1";
}
else if(re2===1){
  window.location.href="http://localhost:3000/docc1";
}


return (
    <div> 
      <div style={{background:"lightgreen"}}>
      <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"lightgreen",'font-size': '40px',fontWeight:100,color:"brown",textTransform: 'capitalize'}} className="text-center">Welcome {now} To Your-Aid</h1>
      </div>
      {fulldata.fulldata
      .map((doct) =>{

        const Name=doct.patname;
        const mail=doct.patemail;
        const _id=doct._id;
        const confirmtime=doct.time;
        return (
          <> 
   <div style={{background:"lightgreen"}}>
      <h1 style={{marginBottom:28, marginLeft:25, marginTop:15, height:2,background:"black",'font-size': '40px',fontWeight:100,color:"brown"}} className="text-center">....</h1>
      </div>
   <div className="card text-center m-3 forall"> 
      <div className="card text-center m-3">
               <h5 className="card-header"># Pending Appointment Request{mssg.mssg1}</h5>
               <div className="card-body">
               <ul><label style={{color:'orange'}}>Patients's Name</label> : {Name}</ul>
               <br></br>
              <ul><label style={{color:'orange'}}>Patient's Email</label> : {mail}</ul>
              <br></br>
              <ul><label style={{color:'orange'}}>Patient's Time</label> : {confirmtime}</ul>
              <br></br>
              <ul> <label style={{color:'purple'}}> Your Time (optional):
              </label>  : <input onChange={funn} onClick={massg} placeholder='22/12/2022 at 8:00 PM' value={time}></input></ul>
              <div style={{display:"inline"}}>
              <button className="btn btn-danger" onClick={initiateDelete} value={_id} style={{marginLeft:100,float:"bottom",marginTop:40,fontWeight:250  }}>Cancel</button>
              <button className="btn btn-success" onClick={updata} value={_id} style={{marginLeft:400,float:"bottom",marginTop:40}}>Confirm</button>
              </div>
                   </div>
                   </div>
                   <h1 style={{marginTop:80}}>.</h1>
          </div>
          </>
        );
  
      })}</div>
  )
}

export default Confirmforpat;

