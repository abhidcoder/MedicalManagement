import * as React from 'react';
import {useEffect,useState } from 'react';
import Cookies from 'js-cookie';




function Pendingforpat() {

  //const now=Cookies.get('ByAbhishekName');
  const now1=Cookies.get('ByAbhishekEmail');
  
  const [runing,setruning]=useState(2);
  const [fulldata,setfulldata]=useState({
    fulldata:[]
  });

  const[re1,reload1]=useState(0); 

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
    fetch('http://localhost:8001/penforall',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setfulldata({fulldata:jsonRes}))
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

  if(re1===1){
    window.location.href="http://localhost:3000/adco4";
  }


  return (
    <div> 
      <div style={{background:"orange"}}>
      <h1 className="text-center" style={{marginBottom:20, marginLeft:20, marginTop:15, color:"white", fontWeight:100,'font-size': '44px'}}>List Of All Pending Appointments</h1>
      </div>
      {fulldata.fulldata
      .map((doct) =>{
        const docName=doct.docfullname;
        const mail=doct.docemail;
        const _id=doct._id;
        const speciality = doct.practice
        return (
          <> 
          <div style={{background:'lightblue',lineHeight:2}}>
          <li style = {{ marginLeft : 36, marginBottom:15, color:'black', 'font-size': '18px',fontWeight:100}} ><p style={{color:"red"}}>Doctor's Name : {docName}</p>
           <li style={{color:"brown"}}>Email : {mail}</li> <div style={{background:'lightblue',height:38}}><li style={{color:"voilet"}}>speciality: {speciality}</li> 
          <p > <button  onClick={initiateDelete} value={_id} className="btn btn-dark"
           style={{ marginLeft:650, marginTop:-165,fontWeight:100, }}>Cancel</button></p> </div></li> 
          </div>
          </>
        );

      })}</div>
  )
}

export default Pendingforpat;