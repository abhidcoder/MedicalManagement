import * as React from 'react';
import {useEffect,useState } from 'react';



function Confirmforpat() {



const [runing,setruning]=useState(2); 
const [fulldata,setfulldata]=useState({
  fulldata:[]
}); 

const[_id,del_id]=useState("");
const[re,reload]=useState(0);
const[request,setrequest]=useState("Fetch");

  const initiateDelete=(e)=>{
    const targeted=e.target.value;
    del_id(targeted);
    setruning(2);
    setrequest("Delete");
    window.alert("The Record has been deleted");
   
  }  
useEffect(() => {
  if(runing===2){
    if(request==="Fetch")
    {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    };
    fetch('http://localhost:8001/adminlogs',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setfulldata({fulldata:jsonRes}));  
  }
  else{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:_id})
  };
  fetch('http://localhost:8001/delforalls',requestOptions )
  .then(response => response.json()).then(reload(re+1));
   
  }

  }
  setruning(4);


});

  if(re===1){
    window.location.href="http://localhost:3000/adco";
  }

return (
  <div > 
    <div style={{background:"black"}}>
    <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"black",'font-size': '40px',fontWeight:100,color:"white"}} className="text-center">List Of All Appointments</h1>
    </div>
    {fulldata.fulldata
    .map((doct) =>{
      const patName=doct.patname;
      const mail=doct.patemail;
      const _id=doct._id;
      const confirmtime=doct.time;
      const number = doct.patphone;
      const docmail =doct.docemail;
      const request_on =doct.reqested_on;
      const docname = doct.docfullname;
      const practice = doct.practice;
      const status = doct.status;
      const payment = doct.payment;
      return (
        <>  <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"black",color:"yellow",height:2}} className="text-center">...</h1>
        <div style={{marginBottom:478}}> 
        <div style={{background:'lightyellow',height:510,width:1000,marginLeft:20}}>
          <br></br>
      <div>
        <li style = {{ marginLeft : 36, marginBottom:29, color:'black', 'font-size': '18px',fontWeight:180, lineHeight:3}}> <p style={{'font-size': '22px',color:'red',textTransform: 'capitalize'}}>Patient Name : {patName}</p> <li style={{'font-size': '22px',color:'brown'}}>Patient Email : {mail}</li> 
        <li style={{'font-size': '22px',color:'black'}}> Patient Number : {number}</li>
        <li style={{'font-size': '22px',color:'brown'}}> Doctor Name : {docname}</li> 
        <li style={{'font-size': '22px',color:'black'}}> Doctor's Email : {docmail}</li>
        <li style={{'font-size': '22px',color:'brown'}}> Doctor's Speciality : {practice}</li>
        <li style={{'font-size': '22px',color:'black'}}> Time : {confirmtime}</li> 
        <ul style={{background:"purple",marginLeft:-35}}>
        <ul style={{'font-size': '22px',color:'brown',background:"lightgrey"}}> Status : {status}</ul>
        <ul style={{'font-size': '28px',color:'white',background:"black",textTransform: 'capitalize'}}> Payment : {payment}</ul> </ul>
        <ul style={{background:"lightgreen",marginLeft:-35}}><ul style={{'font-size': '28px',color:'white',fontWeight:820}}># Request Made On Details : {request_on}</ul></ul>
        <div style={{marginLeft : 1260}}>
        </div>
        </li> 
        </div>
        </div>
        <button className="btn btn-danger" onClick={initiateDelete} value={_id} style={{width: "5%", height: "4%",fontWeight:250 ,marginLeft:"1200px", marginTop:-240,float:"bottom",display:"flex"  }}>Delete</button>
        </div>
        </>
      );

    })}</div>
)
}

export default Confirmforpat;