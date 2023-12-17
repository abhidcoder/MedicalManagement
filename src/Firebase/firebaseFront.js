import React, { useState ,useEffect}  from 'react';
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from "firebase/auth";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
  import { auth } from "./firebaseconfig";

export default function Login() {

  const [number, setEmail] = useState("");
  const [runing,setruning]=useState(4); 
  const [verify, setverify] = useState("");

  const [converify, setconverify] = useState("");

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const submit=async(e)=>{
    //const [user, setUser] = useState({});
    e.preventDefault();
    console.log(number);
    //setError("");
    if (number === "" || number === undefined)
      return alert("Please enter a valid phone number!");
    try {
      const response=await setUpRecaptha(number);
      //console.log("I am response",response);
      setconverify(response);
      setverify(true);
      alert("Your-Aid OTP has Been Sent");
      //setResult(response);
      //setFlag(true);
    } catch (err) {
      //setError(err.message);
      alert(err)
    }
    
}


const verification=async(e)=>{
    e.preventDefault();
    if (verify === "" || verify === null) return;
    try {
      await converify.confirm(verify);
      alert("Your Number Has Been Verified Please Sign Up To Your-Aid with the registered Number");
      window.location.href="http://localhost:8001/patient"

      useEffect(() => {
        if(runing===2){

        
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ number:number})
          };
          fetch('http://localhost:8001/numbers',requestOptions )
              .then(response => response.json())
              //.then((jsonRes) => setfulldata({fulldata:jsonRes}));  
      
        }
        setruning(4);
      
      
      });

      
    } catch (err) {
      alert("Sorry The OTP Entered By You is Wrong");
      window.location.href="http://localhost:3000"
    }
    }


  return (
   <> <h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:180}}>Welcome To Your-Aid Verification Panel</p></h1>
    <div className="text text-center" style={{marginTop:100}} >
    <ul>
     <label style={{marginRight:6,'font-size':"1.2rem",color:'red'}}>Enter Your Mobile Number </label>
          <PhoneInput
           style={{marginLeft:500,marginRight:500,marginTop:40}}
           defaultCountry="IN"
            type="phone"
            value={number}
            onChange={setEmail}
          />
          <br></br>
          </ul>
          <br></br>
          <ul>
       <div id="recaptcha-container" className="text text center"/>
       
       <button className="btn btn-success" style={{marginLeft:60,marginBottom:60,marginTop:-100}} onClick={submit}>
          Get OTP
        </button>
        </ul>
        <div style={{backgroundColor:"black",height:2}}></div>
  <br></br>
  <br></br> 
    <lable style={{marginRight:6,marginLeft:20,'font-size':"1.2rem",color:'purple'}}>Enter Your OTP </lable>
    <input 
        style={{marginLeft:50}}
        type="text"
        value={verify}
        onChange={(e) => setverify(e.target.value)}
/><button className="btn btn-dark" onClick={verification} style={{marginLeft:20}}>
          Verify
        </button>
        
    </div>
    </>

  );

}
