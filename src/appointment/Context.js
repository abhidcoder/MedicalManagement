import {createContext,useState } from 'react';
import * as React from 'react';






export const Contextforabhishek= createContext({});

 
export const Appointment=({children})=>{

  const [name, setname] = useState("Not Available");
  const [emailinfo, setemailinfo] = useState("Not Available");
  const [phone, setphone] = useState("Not Available");
  const [practice, setpractice] = useState("Not Available");
  const [address, setaddress] = useState("Not Available");
  const [imgl, setimgl] = useState("Not Available");
  const [patphone, setpatphone] = useState("Not Available");
 //console.log("patientphone",patphone);
  const yy={emailinfo,name,phone,practice,address,imgl,patphone,setemailinfo,setname,setphone,setpractice,setaddress,setimgl,setpatphone}

return(
  <>
  <Contextforabhishek.Provider value={yy} >{children}</Contextforabhishek.Provider>
  
  </>
);


}