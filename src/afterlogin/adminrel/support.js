import React from 'react';
import { useState, useEffect} from "react";


function Support() {
    const [renn,setRenn] = useState({
        renn:[]
      
      });

    const [r,Rr]=useState({

     r:""
    }
    )



   var runing="2";
     
     

      const [idee , setIdee] = useState({
        idee:""
      }
      );

      const trigs = (e) => {
        const nums=e.target.id;
        window.alert("The Query Has Been Removed");
        //console.log("I am nums",nums);
       //window.alert("it will delete");
       setIdee({
        idee:nums
      });
    
     
    };  
    
    //   const Renns = (e) => {
        
    //     setRenn({
    //      renn:[]
         
    //     });
    //   };  

      // const handleClick = (e) => {
      //   const { name, alt,id} = e.target;
        
      // };
   console.log("hello i am ",idee.idee);

    useEffect(() => {
      //console.log("hey");
      if(r.r==="done"){
        r.r="";
        window.location.reload();
        //window.location.href="/something"
      }
      if(r.r==="error"){
        window.alert("Oops there was an error");
        r.r="";
        window.location.reload();
      }
        if(runing==="2")
       {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  })
    
        };
        fetch('http://localhost:8001/yadav',requestOptions )
            .then(response => response.json())
            .then((data) => setRenn({renn:data})); 
           
        }
      if(idee.idee!==""){
      
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idee:idee.idee})

    };
    fetch('http://localhost:8001/abhishek',requestOptions )
        .then(response => response.json())
        .then((data) => Rr({r:data.msgg})); 


    }
    runing="stop";
    
        
      });

      
  

      
  return (
    <div >
      <p style={{backgroundColor: "lightblue", height: 80}}><h1 style={{marginTop:28, marginBottom:20, marginLeft:15,fontWeight:100, wordSpacing: 10, color:"brown",fontSize: '3.8rem' }}>Your-Aid Help And Support Panel</h1></p>
        <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   width: "20%",
        //   margin: "auto auto",
        // }}
        className="forall"
      >
        {renn.renn
          .sort((a, b) => {
            var titleA = a.title;
            var titleB = b.title;
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
          })
          .map((doct) =>{
            const Name=doct.name;
            const First=doct.phone;
            const Last=doct.email;
            const Lasts=doct.message;
            const Ide = doct._id;
         
            return (

                <div>
                <ul style={{backgroundColor: "purple"}}>
                 <div>
                <h1
                style={{marginLeft:20,marginTop:20, color:"white",fontSize: '2.5rem', fontWeight:100,backgroundColor: "purple",height:60}}
                //id={" ( Call@" +String(doct.phone)+" )"}
                //alt={"Complaint By: "+String(doct.name)}
                //height="8000"
                className='text-center'
                //name={String(doct.name)+" "+String(doct.message)}
              >The Id of the Query is: {Last}</h1>
              </div> 
              </ul>

   <div className='text-center' style={{fontSize:"1.5rem"}}>         
<l1>
<ul><h4 style={{fontSize: '1.9rem'}}>Name:</h4> {Name }</ul>
<ul><h4 style={{fontSize: '1.9rem'}}>Phone:</h4> {First}</ul>
<ul><h4 style={{fontSize: '1.9rem'}}>Email: </h4> {Last}</ul>
<ul><h4 style={{fontSize: '1.9rem'}}>Quest:</h4> {Lasts}</ul>
</l1></div>
<div className='text-center'
style={{marginTop:20, marginBottom:20}} >
 <button  style={{background:"red",paddingLeft:20, paddingRight:20,paddingTop:10,paddingBottom:10,marginLeft:28 }} > <h4 id={Ide} onClick={trigs} style={{color:"white"}} >Resolved</h4></button></div>
               
              </div>
            );

          })}
      </div>
    </div>
  )
}

export default Support;






