import * as React from 'react';
import {useEffect,useState } from 'react';
import Cookies from 'js-cookie';


function Confirmforpat() {

//const now=Cookies.get('ByAbhishekName');
const now1=Cookies.get('ByAbhishekEmail');
const[re,reload]=useState(0);

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
    window.alert("Appointment Has Been Cancelled");
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
    fetch('http://localhost:8001/confirmforall',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setfulldata({fulldata:jsonRes}));  
  }
  else{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id:_id})
  };
  fetch('http://localhost:8001/notdelforall',requestOptions ).then(reload(re+1))
   
  }

  }
  setruning(4);


});

if(re===1){
  window.location.href="http://localhost:3000/adco4";
}

return (
  <div > 
    <div style={{background:"black"}}>
    <h1 style={{marginBottom:20, marginLeft:25, marginTop:15, background:"black",'font-size': '40px',fontWeight:100,color:"white"}} className="text-center">List Of All Approved Appointments</h1>
    </div>
    {fulldata.fulldata
    .map((doct) =>{
      const docName=doct.docfullname;
      const mail=doct.docemail;
      const _id=doct._id;
      const confirmtime=doct.time;
      const addre = doct.docaddress;
      const number = doct.docnumber;
      const Image= doct.imgl;
      return (
        <div className="text text-center " style={{marginBottom:88}}> 
        <div style={{background:'lightblue',height:408,width:1000,marginLeft:20}}>
          <br></br>
        <li style = {{ marginLeft : 36, marginBottom:29, color:'black', 'font-size': '18px',fontWeight:180, lineHeight:3}}> <p style={{'font-size': '22px',color:'red'}}>Doctor Name : {docName}</p> <li style={{'font-size': '22px',color:'brown'}}>Email : {mail}</li> 
        <li style={{'font-size': '22px'}}> Time : {confirmtime}</li> 
        <li style={{'font-size': '22px',color:'purple'}}> Address : {addre}</li>  
        <li style={{'font-size': '22px',color:'maroon'}}> call : {number}</li>
        <div style={{marginLeft : 1260}}>
        <img style={{display:"flex",float:"right",marginTop:-370, border:"solid 6px black"}} src={Image} height="400" width="280" alt="Not Available"></img>
        </div>
        <p> <button className="btn btn-dark" onClick={initiateDelete} value={_id} style={{width: "24%", height: "4%",fontWeight:250 ,marginTop:14  }}> Click Here To Cancel Your Appointment </button>
        </p></li> 
        </div>
        </div>
      );

    })}</div>
)
}

export default Confirmforpat;