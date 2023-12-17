import * as React from 'react';
import {useEffect,useState } from 'react';
import Cookies from 'js-cookie';


function Confirmforpat() {

//const now=Cookies.get('ByAbhishekName');
const now1=Cookies.get('ByAbhishekEmail');

const [runing,setruning]=useState(2); 
const [fulldata,setfulldata]=useState({
  fulldata:[]
}); 

const[_id,del_id]=useState("");
const[re,reload]=useState(0);
const[re1,reload1]=useState(0);
const[request,setrequest]=useState("Fetch");

  const initiateDelete=(e)=>{
    const targeted=e.target.value;
    del_id(targeted);
    setruning(2);
    setrequest("Delete");
    window.alert("Appointment Has Been Cancelled");
  }  

const updata=(e)=>{
  const targeted=e.target.value;
  del_id(targeted);
  setruning(2)
  setrequest("updata");
  window.alert("our team will reach out soon to confirm your payment");


}

useEffect(() => {
  if(runing===2){
    if(request==="Fetch")
    {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails:now1})
    };
    fetch('http://localhost:8001/inprocess',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setfulldata({fulldata:jsonRes}));  
  }
  else if(request==="updata"){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ updatas:"admin",id:_id})
  };
  fetch('http://localhost:8001/updata',requestOptions )
  .then(response => response.json()).then(reload(re+1));
  }
  else{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:_id})
  };
  fetch('http://localhost:8001/delforall',requestOptions ).then(reload1(re1+1));
   
  }

  }
  setruning(4);


});

if(re===1){
  window.location.href="http://localhost:3000/adco4";
}
else if(re1===1){
  window.location.href="http://localhost:3000/adco4";
}

return (
    <div> 
      <div style={{background:"lightgreen"}}>
      <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"lightgreen",'font-size': '40px',fontWeight:100,color:"brown"}} className="text-center">List Of All In Process Appointments</h1>
      </div>
      {fulldata.fulldata
      .map((doct) =>{
        const docName=doct.docfullname;
        const mail=doct.docemail;
        const _id=doct._id;
        const confirmtime=doct.time;
        const addre = doct.docaddress;
        const number = doct.docnumber;
        return (
          <> 
          <div style={{background:'lightblue'}}>
            <br></br>
          <li style = {{ marginLeft : 36, marginBottom:29, color:'black', 'font-size': '18px',fontWeight:100, lineHeight:3}}> <p style={{'font-size': '22px',color:'red'}}>Doctor Name : {docName}</p> <li style={{'font-size': '22px',color:'brown'}}>Email : {mail}</li> 
          <li style={{'font-size': '22px'}}> Time : {confirmtime}</li> 
          <li style={{'font-size': '22px',color:'purple'}}> Address : {addre}</li>  
          <li style={{'font-size': '22px',color:'maroon'}}> call : {number}</li>
          <p><button className="btn btn-dark" onClick={initiateDelete} value={_id} style={{display:"flex",marginLeft:650, marginTop:-220, width: "6%", height: "8%",fontWeight:250  }}> Cancel </button>
          <button className="btn btn-dark text center" onClick={updata} value={_id} style={{marginLeft:650}}>Confirm</button></p></li> 
          </div>
          </>
        );
  
      })}</div>
  )
}

export default Confirmforpat;