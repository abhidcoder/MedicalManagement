import React from 'react';
import './Appyss.css';
import { NavDropdown, Navbar,Nav,Container} from "react-bootstrap";
import Patmainss from './patmain';
import Cookies from 'js-cookie';
import Pafp from "../../appointment/pendingforpat";
import Pafc from "../../appointment/confirmforpat";
import Pafi from "../../appointment/in_process"; 
import { BsFillBagCheckFill,BsFillCalendarPlusFill,BsFillFileEarmarkTextFill,BsFillEmojiSunglassesFill,BsFillPersonCheckFill} from "react-icons/bs";
import {BsFillPeopleFill,BsArrowReturnRight} from "react-icons/bs";
import {AiFillApi} from 'react-icons/ai';




class MainPage extends React.Component {
 now=Cookies.get('ByAbhishekName');
 now1=Cookies.get('ByAbhishekEmail');


 Destroy=(e)=> {
  Cookies.remove('ByAbhishekName');
  Cookies.remove('ByAbhishekEmail');
  Cookies.remove('ByAbhishekphone');

  window.location.href="http://localhost:3000";

 }
    state = {current: 'login',gotid:'',temp:"",keyo:'',fork:"2",mssg:"",keystate1:"",keystate2:""};
  

  Changess1=(e)=>{

      this.setState(
        {
            temp: e.target.value,
        });

    }

  forkey=(e)=>
    {
     this.setState(
       {
           keyo: this.state.temp,
           fork:"1"
       }
   );
   
    }
 
    componentDidMount() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:this.now1})
    };
    fetch('http://localhost:8001/keyy', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ gotid:data.idee}));
    }

  componentDidUpdate() {
    if(this.state.fork==="1"){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emails:this.now1,keyy:this.state.keyo})
  };
  fetch('http://localhost:8001/keyychange', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ mssg:data.mssg}));
  this.setState({fork:"2"});
}
  }


  renderForm = (current,doct) => {
  //console.log(this.state.fork)
  if(this.now1 && this.now){
if (current === 'login') {
           
              return(
            <div>
            <h1  style={{marginTop:40, marginBottom:40, fontSize: '3.5rem',color:'green',background:"lightblue",fontWeight:90,textTransform: 'capitalize'}} className="text-center">Welcome {this.now} To Your-Aid</h1>
            <Patmainss/>
            </div>);
           

    }
    else if(current === 'reset')
    {
      return(
        <div>
         <Pafp/>
        </div>
      )



    }
    else if(current==='Patient-key'){

   
      

      if(this.state.mssg!==""){

        return(
          <div style={{marginTop:20}}>
             <h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18, marginDown : 90,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:180}}>Welcome To Your-Aid Patient Key Panel</p></h1>
              <div className="text center" style={{marginTop:80, marginBottom:-15}}>
              <h1>Your New Key Has Been Set</h1>
              <br></br>
              </div >
                <input 
               type='email'
               value={this.temp}
               className="card-header paddr text center" 
               placeholder="Enter Your New Key"
               id='name'
               required={true}
               onChange={this.Changess1}
               style={{ marginTop:16}}
             />
             <div >
              <button className="btn btn-success text center"  style={{marginTop:-50}} onClick={this.forkey}>Reset My key</button>
              </div>
              <div className="card text-center m-3"> 
              <div className="card text-center m-3">
             <h5 className="card-header">CONGRATULATIONS</h5>
             <div className="card-body">
                 <div>
                  
                 <h3 style={{color:'red'}}>{this.state.mssg}</h3>
                 <h3 style={{color:'orange'}}>Your New Key is: {this.state.keyo}</h3>

                 </div>
                 </div>
                 </div>
                 </div>
                 <h1 style={{marginTop:80}}>.</h1>
      </div>
      );


      }
      else if(this.state.keystate1===""){

        return(
          <div style={{marginTop:20}}>
             <h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18, marginDown : 150,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:180}}>Welcome To Your-Aid Patient Key Panel</p></h1>
             <div className="card text-center m-3"> 
              <div className="card text-center m-3">
             <h5 className="card-header">Conclusion Box</h5>
             <div className="card-body">
                 <div>
        
                 <h2 style={{color:'green'}}>Your current Key is: <h1 style={{color:'red'}}>{this.state.gotid}</h1></h2></div>
                 

                 </div>
                 </div>
                 </div>
              <div className="text center" style={{marginTop:60, marginBottom:-15}}>
              <h1>Enter A New Key Below To Reset</h1>
              <br></br>
              </div >
                <input 
               type='email'
               value={this.temp}
               className="card-header paddr text center" 
               placeholder="Enter Your New Key"
               id='name'
               required={true}
               onChange={this.Changess1}
               style={{ marginTop:16}}
               onClick={(e)=>{this.setState({keystate1:"changed"})}}
             />
             <div >
              <button className="btn btn-success text center"  style={{marginTop:-50}} onClick={this.forkey}>Reset My key</button>
              </div>
                 <h1 style={{marginTop:80}}>.</h1>
      </div>
      );

       }
       else if(this.state.keystate1!==""){

        return(
          <div style={{marginTop:20}}>
          <h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18, marginDown : 90,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:180}}>Welcome To Your-Aid Patient Key Panel</p></h1>
              <div className="text center" style={{marginTop:80, marginBottom:-15}}>
                <h1>Enter Your Key Below</h1>
                <br></br>
              </div >
                <input 
               type='email'
               value={this.temp}
               className="card-header paddr text center" 
               placeholder="Enter Your New Key"
               id='name'
               required={true}
               onChange={this.Changess1}
               style={{ marginTop:16}}
             />
             <div >
              <button className="btn btn-success text center"  style={{marginTop:-50}} onClick={this.forkey}>Reset My key</button>
              </div>
              <div className="card text-center m-3"> 
              <div className="card text-center m-3">
             <h5 className="card-header">Important Message</h5>
             <div className="card-body">
                 <div>
                  
                 <h2 style={{color:'orange'}}>Key Helps in Protecting Your Confidentiality</h2>
                 <h2 style={{color:'lightblue'}}>Your key protects you from doctor's accessing your medical records without your permission</h2>
                 <h2 style={{color:'lightblue'}}>You can change your key anytime in just one click</h2>
                 <h2 style={{color:'red'}}>Please share your key with only those doctors, whom you want to give the acsess to your medical records</h2>

                 </div>
                 </div>
                 </div>
                 </div>
                 <h1 style={{marginTop:80}}>.</h1>
      </div>
      );

       }

        
       
   
        }

else if (current === 'doctor') {

 
    return(
    <div>
       <Pafc/>
    </div>
    )

  }
else if(current==='inprocess'){

return(
  <>
  <Pafi/>
  </>
)


};
}
else{
  return(
   <div className=" text text-center">
       Unauthorized Access Please Login
   </div>);
  }
}


  render() {
   if(this.now1 && this.now){
    return (
        <div className='forall'>
        <Navbar style={{fontSize: '1.1rem', fontWeight:100, fontFamily: 'Roboto',height:75}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand onClick={() => {
                this.setState({ current: 'login' });
              }}><BsFillCalendarPlusFill/> Your-Aid Doctors</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="http://127.0.0.1:5000"><BsFillFileEarmarkTextFill/> Your-Aid Machine Diagnosis</Nav.Link>
        <Nav.Link href="#"> <BsFillBagCheckFill/> Your Prescriptions</Nav.Link>
        <Nav.Link  onClick={() => {
                this.setState({ current: 'Patient-key' });
              }}><BsFillEmojiSunglassesFill/> Patient Key</Nav.Link>
        
         <Nav.Link href="#pricing"> <BsFillPersonCheckFill/></Nav.Link>
       <NavDropdown title="Appointment Panel" id="collasible-nav-dropdown"> 
       
        <NavDropdown.Item onClick={() => {
                this.setState({ current: 'reset' });
              }}>Pending Appointments</NavDropdown.Item>
         <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => {
                this.setState({ current: 'inprocess' });
              }}>In Process Appointments</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => {
                this.setState({ current: 'doctor' });
              }}>Confirm Appointments</NavDropdown.Item>
        
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="http://localhost:8001/quest"><BsFillPeopleFill/> Open Support Center</Nav.Link>
        <Nav.Link onClick={this.Destroy}>
        <BsArrowReturnRight/> LOG OUT
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
          {this.renderForm(this.state.current)} 
        </div>
        
    );}
    else{
      return(
      <>
      <div className="text text-center" style={{marginTop:20}}>
         <ul><h1>Unauthorized Access, Please Try loging in again</h1> 
         <h1 style={{marginLeft:250,height:100,width:900}}><AiFillApi/></h1></ul>
        </div>
      </>

      )
    }
  }
}

export default MainPage;
