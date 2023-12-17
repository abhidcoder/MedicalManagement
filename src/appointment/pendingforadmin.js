import * as React from 'react';
import {useEffect,useState } from 'react';



function Confirmforpat() {


  const[re,reload]=useState(0);
  const[re1,reload1]=useState(0);

const [runing,setruning]=useState(2); 
const [fulldata,setfulldata]=useState({
  fulldata:[]
}); 

const[_id,del_id]=useState("");
const[request,setrequest]=useState("Fetch");

  const initiateDelete=(e)=>{
    const targeted=e.target.value;
    del_id(targeted);
    setruning(2);
    setrequest("Delete");
    window.alert("Payment Status has been successfully updated");
    window.location.href="http://localhost:3000/adco";
  }  
  const initiateDeletes=(e)=>{
    const targeted=e.target.value;
    del_id(targeted);
    setruning(2);
    setrequest("Deletes");
    window.alert("The Request has been Removed");
    window.location.href="http://localhost:3000/adco";
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
    fetch('http://localhost:8001/allforadmin',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setfulldata({fulldata:jsonRes}));  
  }
  else if(request==="Deletes"){

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:_id})
  };
  fetch('http://localhost:8001/deleteforadmin',requestOptions )
      .then(response => response.json()).then(reload(re+1));
  }
  else{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id01:_id})
  };
  fetch('http://localhost:8001/adminupdatess',requestOptions )
  .then(response => response.json()).then(reload1(re1+1));
   
  }

  }
  setruning(4);


});

if(re===1){
  window.location.href="http://localhost:3000/adco";
}
else if(re1===1){
  window.location.href="http://localhost:3000/adco";
}


return (
  <div > 
    <div style={{background:"black"}}>
    <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"black",'font-size': '40px',fontWeight:100,color:"white"}} className="text-center">List Of All Payment Pending Appointments</h1>
    </div>
    {fulldata.fulldata
    .map((doct) =>{
      const patName=doct.patname;
      const mail=doct.patemail;
      const _idem=doct._id;
      //console.log("I am Id", _idem);
      const confirmtime=doct.time;
      const number = doct.patphone;
      const docmail =doct.docemail
      const request_on =doct.reqested_on
      return (
        <>  <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"black",color:"yellow",height:2}} className="text-center">...</h1>
        <div style={{marginBottom:88}}> 
        <div style={{background:'lightyellow',height:370,width:1000,marginLeft:20}}>
          <br></br>
      <div>
        <li style = {{ marginLeft : 36, marginBottom:29, color:'black', 'font-size': '18px',fontWeight:180, lineHeight:3}}> <p style={{'font-size': '22px',color:'red',textTransform: 'capitalize'}}>Patient Name : {patName}</p> <li style={{'font-size': '22px',color:'brown'}}>Patient Email : {mail}</li> 
        <li style={{'font-size': '22px'}}> Time : {confirmtime}</li> 
        <li style={{'font-size': '22px',color:'maroon'}}> Patient Number : {number}</li>
        <li style={{'font-size': '22px',color:'maroon'}}> Doctor's Email : {docmail}</li>
        <ul style={{background:"lightgreen",marginLeft:-35}}><ul style={{'font-size': '28px',color:'white',fontWeight:820}}># Request Made On Details : {request_on}</ul></ul>
        <div style={{marginLeft : 1260}}>
        </div>
        </li> 
        </div>
        </div>
        <div  style={{fontWeight:250 ,marginRight:"100px", marginTop:-280,float:"right" }}>
         <button className="btn btn-info " onClick={initiateDelete} value={_idem} style={{marginLeft:48,marginTop:20,width:"70%",height:"48%"}} >Click Here To Confirm</button>
        </div>
        <div style={{fontWeight:250 ,marginRight:"100px", marginTop:-180,float:"right" }} >
        <button className="btn btn-danger " value={_idem} style={{marginLeft:48,marginTop:20,width: "70%", height:"48%"}} onClick={initiateDeletes} >Click Here To Cancel</button>
        </div>
        </div>
        </>
      );

    })}</div>
)
}

export default Confirmforpat;