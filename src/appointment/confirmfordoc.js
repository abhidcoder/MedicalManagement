import * as React from 'react';
import {useEffect,useState } from 'react';
import Cookies from 'js-cookie';


function Confirmforpat() {


const[re,reload]=useState(0);
//const now=Cookies.get('ByAbhishekName');
const now1=Cookies.get('DocAbhishekEmail');

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
    window.alert("Thank You For Confirming");
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
    fetch('http://localhost:8001/confirmfordoc',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setfulldata({fulldata:jsonRes}));  
  }
  else{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:_id})
  };
  fetch('http://localhost:8001/docconfirmss',requestOptions )
  .then(response => response.json()).then(reload(re+1));
 
   
  }

  }
  setruning(4);


});

if(re===1){
  window.location.href="http://localhost:3000/docc1";
}


return (
  <div > 
    <div style={{background:"black"}}>
    <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"black",'font-size': '40px',fontWeight:100,color:"white"}} className="text-center">List Of All Approved Appointments</h1>
    </div>
    {fulldata.fulldata
    .map((doct) =>{
      const patName=doct.patname;
      const mail=doct.patemail;
      const _id=doct._id;
      const confirmtime=doct.time;
      const number = doct.patphone;
      return (
        <>  <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"black",color:"yellow",height:2}} className="text-center">...</h1>
        <div style={{marginBottom:88}}> 
        <div style={{background:'pink',height:320,width:1000,marginLeft:20}}>
          <br></br>
      <div>
        <li style = {{ marginLeft : 36, marginBottom:29, color:'black', 'font-size': '18px',fontWeight:180, lineHeight:3}}> <p style={{'font-size': '22px',color:'red',textTransform: 'capitalize'}}>Patient Name : {patName}</p> <li style={{'font-size': '22px',color:'brown'}}>Email : {mail}</li> 
        <li style={{'font-size': '22px'}}> Time : {confirmtime}</li> 
        <li style={{'font-size': '22px',color:'maroon'}}> call : {number}</li>
        <div style={{marginLeft : 1260}}>
        </div>
        </li> 
        </div>
        </div >
        <div style={{fontWeight:250 ,marginRight:"110px", marginTop:-180,float:"right"  }}>
         <button className="btn btn-dark " onClick={initiateDelete} value={_id} style={{width: "92%", height: "48%"}}>Done</button>
         </div>
        </div>
        </>
      );

    })}</div>
)
}

export default Confirmforpat;