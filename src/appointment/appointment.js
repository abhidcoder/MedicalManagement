import * as React from 'react';
import {useContext,useState,useEffect } from 'react';
import { Contextforabhishek } from './Context';
import Cookies from 'js-cookie';


export default function All(){

  const {emailinfo,name,phone,practice,address,imgl,patphone}=useContext(Contextforabhishek);
  const now=Cookies.get('ByAbhishekName');
  const now1=Cookies.get('ByAbhishekEmail');
  const[time,settime]=useState("");
  const[data,comindata]=useState("Please Enter The Booking Timings");
  const [runing,setruning]=useState(4);  
  const [mssg,setmsg]=useState({
    mssg1:"",
    mssg2:""
  })

  const massg=(e)=>{
    setmsg({
      mssg1:"Please make sure that booking time is understandable",
      mssg2:"Example: Today at 2:00 pm or Tomorrow at 7:00 AM or dd/mm/yyyy at 8:00 PM"
    })
  } 
  const funn=(e)=>{
    settime(e.target.value);
  }

  const Yess=(e)=>{
    setruning(2);
  }

  useEffect(() => {
    if(runing===2)
    {
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docemail:emailinfo, docname:name, patemail:now1, time:time, patname:now,practice:practice,docaddress:address,docnumber:phone,imgl:imgl,patphone:patphone})
    };
    fetch('http://localhost:8001/appointment',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => comindata(jsonRes.mssg));

        setruning(4);
  }
  

  });

  return(
    <div className="text-center" style={{marginTop:40}}>
   {/* <h1><h2>Doctor's Name</h2> : {now}</h1> */}
 
  {/* <ul> <label>Your Email</label> :  {now1}</ul> */}
 
   <div>
   <div style={{background:"lightgreen"}}>
      <h1 style={{marginBottom:28, marginLeft:25, marginTop:15, background:"lightgreen",'font-size': '40px',fontWeight:100,color:"brown"}} className="text-center">Your-Aid Book Your Slot</h1>
      </div>
   <div className="card text-center m-3 forall"> 
      <div className="card text-center m-3">
               <h5 className="card-header"># {data}</h5>
               <div className="card-body">
               <ul><label style={{color:'orange'}}>Doctor's Name</label> : {name}</ul>
               <br></br>
              <ul><label style={{color:'orange'}}>Doctor's Email</label> : {emailinfo}</ul>
              <br></br>
              <p>{mssg.mssg1}</p>
              <p>{mssg.mssg2}</p>
              <ul> <label style={{color:'purple'}}> Enter The Time
              </label>  : <input onChange={funn} onClick={massg} placeholder='22/12/2022 at 8:00 PM' value={time} required={true}></input></ul>
              <button onClick={Yess} className="btn btn-dark" style={{marginTop:12,marginLeft:51}} >Click Here To Book Your Appointment Slot</button>
                   </div>
                   </div>
                   </div>
                   <h1 style={{marginTop:80}}>.</h1>
        </div>
     
    </div>

  );
}
