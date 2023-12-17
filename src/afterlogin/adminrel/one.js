import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Docss from './designdb';
import Supp from './support';
import Container from 'react-bootstrap/Container';
import Alldata from "../../appointment/allforadmin";
import Payment from "../../appointment/pendingforadmin";
import Abhi from "./consult";
import { BsFillAlarmFill} from 'react-icons/bs';
import {IoIosBuild,IoIosPaper,IoIosListBox} from 'react-icons/io';
import {IoIosBriefcase,IoLogoReddit,IoIosLink} from 'react-icons/io';
import {AiFillApi} from 'react-icons/ai';
import Cookies from 'js-cookie';
import './mains.css';



class MainPage extends React.Component {
  

    state = {current: 'login', email:'',title:"",count:1, var1:"",var2:"",var3:"",var4:"",o1:"",o2:"",o3:"",o4:"",masg:"",
    a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"",j:"",admin:"",k:"",kk:"",kkk:"",kkkk:"",kkkkk:"",massag:"",
    abhi:"OOps! INVALID ID.",al:"",al1:"",idss1:"",idss2:"",idee:"",pass:"",got:"",log:"",log1:"",logg:"",logg1:"",Fetch:[],now:"",dell:""};

    Destroy=(e)=> {
      Cookies.remove('AdminAbhishekId');
      //Cookies.remove('DocAbhishekEmail');
      window.location.href="http://localhost:3000";
    
     }

     now = Cookies.get('AdminAbhishekId');
   
    Changes = (e) => {
        this.setState(
            {
                email: e.target.value,
            }
        );
        
      };
      handleClickEvents=(e)=> {
        this.setState(
            {
                title: this.state.email,
                count:1

            }
        );
      };
      Changes1 = (e) => {
        this.setState(
            {
                idss1: e.target.value,
            }
        );
        
      };
      Changes2 = (e) => {
        this.setState(
            {
                idss2: e.target.value,
            }
        );
        
      };
      handleClickEventsF=(e)=> {
        this.setState(
            {
                idee: this.state.idss1,
                pass: this.state.idss2,
                count:1

            }
        );
      };
      Log = (e) => {
        this.setState(
            {
                log: e.target.value,
            }
        );
        
      };
      Log1 = (e) => {
        this.setState(
            {
                log1: e.target.value,
            }
        );
        
      };

      handleClickEvents2=(e)=> {
        
        this.setState(
            {
                logg: this.state.log,
                logg1: this.state.log1,
                count:1

            }
        );
        
      };

      Dellevent=(e)=> {
        this.setState(
            {
               
                count:1

            }
        );
      };

      Changess1=(e)=> {
        this.setState(
            {
               
                var1:e.target.value

            }
        );
      };

      Changess2=(e)=> {
        this.setState(
            {
               
                var2:e.target.value

            }
        );
      };

      Changess3=(e)=> {
        this.setState(
            {
               
                var3:e.target.value

            }
        );
      };

      Changess4=(e)=> {
        this.setState(
            {
               
                var4:e.target.value

            }
        );
      };
 
      Oneclick=(e)=> {
        this.setState(
            {
                o1: this.state.var1,
                o2: this.state.var2,
                o3: this.state.var3,
                o4: this.state.var4,
                count:1

            }
        );
      };

       
      //Not Mutating State Directly example
      // handleClick = (e) => {
      //   const {className} = e.target;
      //   this.setState(this.now=className);
      //  }
      
    
   
    //componentDidMount() only works when rendered for the first time
  componentDidMount() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ })
    };
    fetch('http://localhost:8001/emuu', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ al:data.b, al1:data.i}));
    }


    componentDidUpdate() {
       if(this.state.count===1){
        this.setState(
            {
                count: 2,
    
            }
        );
        if(this.state.o1!=="" && this.state.o2!=="" && this.state.o3!=="" && this.state.o4!=="")
        {

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.o1, password: this.state.o2, newpass:this.state.o3, newpass2: this.state.o4 })
        };
        fetch('http://localhost:8001/em04', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({masg:data.gott}));

        }
        if(this.state.dell!==""){
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ delete: this.state.dell })
        };
        fetch('http://localhost:8001/em03', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({}));

        }
        if(this.state.idee!=="" && this.state.pass!==""){

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.idee, password: this.state.pass, id:this.state.title })
        };
        fetch('http://localhost:8001/em01', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ got:data.gott }));
    }

    if(this.state.logg!=="" && this.state.logg1!==""){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.state.logg, password: this.state.logg1 })
    };
    fetch('http://localhost:8001/em02', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ Fetch:data,massag:data.gott }));

    
    }
 
    if(this.state.title!==""){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.title})
        };
        fetch('http://localhost:8001/em', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ a:data.a, b:data.b, c:data.c, d:data.d,
                e:data.e, f:data.f, g:data.g, 
                h:data.h, i:data.i, j:data.j,abhi:data.abhi,admin:data.id }));
            }
    }
    
    }


  renderForm = (current,log,log1,email,title,a,b,c,d,e,f,g,h,i,j,abhi,admin,al,al1,idss1,idss2,k,kk,kkk,kkkk,kkkkk,dell) => {
    //console.log(this.state.see)
  
    if(this.now){
    if (current === 'login') {
    
      return (
          <div className='forall'>
            <h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18, marginDown : 90,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:180}}>Welcome To Your-Aid Admin Panel</p></h1>
        <div className="center adjust forall">
          <a href="http://localhost:3000/adco">
            <button className='btn btn-dark' style={{ fontSize: '1.5rem',color:'orange'}}>
              Click here To load Available Requests
            </button>
            </a>
          </div>
          <div style={{marginTop:80}}>
          <div className="card text-center m-3 " >
               <h4 className="card-header " style={{color:'purple'}}>Please Verify The Account If Email And Status Is Being Displayed</h4>
               <div className="card-body">
        <h1 style={{color:'green'}}>Email:</h1>
       <h3>{this.state.al}</h3>
       <h1 style={{color:'green'}}>Status:</h1>
       <h3>{this.state.al1}</h3>
          </div>
        </div>
        </div>
        <h1>..</h1>
        </div>

      );
    }
    else if(current==="abhi"){
      
      return(

        <>
        <Abhi/>
        </>

      )



    }
    else if(current === 'reset')
    {
      return(
        <div>
           <h1 style={{color:'red',marginTop:20,display: "block", width: "100%", height: "40%",fontSize: '4.5rem',fontWeight:80,background:"lightblue"}}><p style={{marginLeft:420}}>Admin-ID Reset Panel</p></h1>
           
        
        <div className="text-center" style={{marginTop:28, marginDown:60}}>
          <div>
          <h3 style={{color:'black'}}>Enter Your Admin Id</h3>
          <input
                 type='email'
                 value={k}
                 className="card-header paddr" 
                 placeholder="Enter Your Id"
                 id='name'
                 required={true}
                 onChange={this.Changess1}
               />
               </div>
               <br></br>
               <h3 style={{color:'black'}}>Enter Your Current Password</h3>
               <div >
               <input
                 type='text'
                 value={kk}
                 className="card-header paddr" 
                 placeholder="Enter Current Password"
                 id='name'
                 required={true}
                 onChange={this.Changess2}
               />
               </div>
               <br></br>
               <h3 style={{color:'purple',/*backgroundColor: "lightblue"*/}}>Enter New Password</h3>
               <div>
                 <input
                 type='text'
                 value={kkk}
                 className="card-header paddr" 
                 placeholder="Enter New Password"
                 id='name'
                 required={true}
                 onChange={this.Changess3}
               />
               </div>
               <br></br>
               <h3 style={{color:'purple'}}>Enter New Password</h3>
               <div>
                 <input
                 type='text'
                 value={kkkk}
                 className="card-header paddr" 
                 placeholder="Enter New Password"
                 id='name'
                 required={true}
                 onChange={this.Changess4}
               />
               <br></br>
               </div>
                 <div className="text-center butt" style={{marginTop:50, marginDown:1200}}>
   <button className="btn btn-success" onClick={this.Oneclick} value={kkkkk}>Click Here To Reset</button>

   </div>
   
   <div className="card text-center m-3 forall"> 
      <div className="card text-center m-3">
               <h5 className="card-header">Conclusion Box</h5>
               <div className="card-body">
                   <div><h3 style={{color:'red'}}>{this.state.masg}</h3></div>
                   </div>
                   </div>
                   </div>
                   <h1 style={{marginTop:80}}>.</h1>
        </div>
     
        </div>
      )



    }
    else if(current==="Appointall"){

      return(

        <Alldata/>
      )
    }
    else if(current==="payment"){

      return(

        <Payment/>
      )
    }
    else if(current==="Docss"){

      return(

        <Docss/>
      )
    }
    else if(current==="Supp"){

      return(

        <Supp/>
      )
    }
    else if(current==='Admin-log'){
     

    if(this.state.logg!==""){

        if(this.state.massag==="No Such Id Exists"){
          return(

          <div>
      <div className="card text-center m-3 forall"> 
      <div className="card text-center m-3">
          <h5 className="card-header">Error</h5>
          <div className="card-body">
             <div><h3 style={{color:'red'}}>{this.state.massag}</h3></div>
                </div>
                </div>
                </div>
                <div className="card text-center m-3 forall"> 
          <button className="btn btn-dark" onClick={() => {
                this.setState({ logg:""});
              }}>Click Here To Go Back</button></div>
              <h4 style={{marginTop:700}}>.</h4>
                </div>);

        }
        else{
          return(
          <div>
            <h1 style={{marginLeft:10,marginTop:20, color:"purple",fontSize: '4.5rem', fontWeight:250}}>All The Id Of The Doctors In-Process Under You</h1>
            
            <br></br>
            <button    className="btn btn-dark"
              onClick={() => {
                this.setState({ logg:"" });
              }}
              style={{ fontSize: '1.2rem',marginBottom:22, marginLeft:10 }}
            >
              Go Back
            </button>
            <br></br>
          {this.state.Fetch.map((doct)=>{
            //Not Mutating State Directly
            this.dell=doct.email;
            const vall=doct.email;
              
          return(
            <div className="text-center">
          <ul style={{backgroundColor: "lightblue"}}><h1
                style={{marginLeft:20,marginTop:20, color:"red",fontSize: '1.5rem', fontWeight:100}}
              >The Id Of The Doctor Is: {vall}</h1>
              <br></br>
              <button onClick={this.Dellevent} className="btn btn-dark" style={{marginLeft:25}}>Click Here If Verified</button></ul>
              </div> 
          );
          })}
          <h4 style={{marginTop:750}}>.</h4>
          </div>
          ); 
        }
      }
   else{
   
      return(
        
        <div><h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18, marginDown : 120,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:410}}>Your-Id's Status Panel</p></h1>
        <div className='forall'>
        <div className='forall'>
          <div className="card-header text-center">
          <h3 style={{marginTop:40,/*backgroundColor: "lightblue"*/}}>Enter Admin Id</h3>
       <input
                 type='text'
                 value={log}
                 className="card-header paddr" 
                 placeholder="Enter the Doctor's Email Id here"
                 id='name'
                 required={true}
                 onChange={this.Log}
                 
               />
               <br></br>
               <h3 style={{marginTop:40,/*backgroundColor: "lightblue"*/}}>Enter Your Admin Password</h3>
               <input
                 type='text'
                 value={log1}
                 className="card-header paddr" 
                 placeholder="Enter the Doctor's Email Id here"
                 id='name'
                 required={true}
                 onChange={this.Log1}
                 
               />
           
              
  <div className="text-center butt">

   <button  className="btn btn-success" style={{marginTop:20}} onClick={this.handleClickEvents2} /*value={title}*/>Click Here To Get Details</button>
   </div>
   </div>
 <br></br>
    </div>
    <h1 style={{marginTop:400}}>.</h1>
    </div>
   </div>
      );
}     

  }

else if (current === 'doctor') {

     if (this.state.abhi!=="OOps! INVALID ID."){
      return(
        <div className='#'>
        <h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18, marginDown : 120,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:380}}>Signed-Up-Id's Detail</p></h1>
        <div>
       <div className="card-header text-center">
        <span classsName="row">
        
       <input
                 type='email'
                 value={email}
                 className="card-header paddr" 
                 placeholder="Enter the Doctor's Email Id here"
                 id='name'
                 required={true}
                 onChange={this.Changes}
               />
        
          <br></br>
    <div className="text-center butt">
   <button className="btn btn-success" onClick={this.handleClickEvents} value={title}>Click Here To Get Details</button>
   </div>
  
   <button    className="btn btn-primary back"
              onClick={() => {
                this.setState({ abhi:"OOps! INVALID ID." });
              }}
              style={{ fontSize: '1.2rem' }}
            >
              Go Back
            </button>
            <div>

  </div>
   </span>
 </div>
 <br></br>
           <div className="card text-center m-3">
               <h5 className="card-header"><h1 style={{color:'purple'}}>Details Of The Signed-Up Doctor</h1></h5>
               <div className="card-body">
                   <div><h3>Full Name:</h3> <h3 style={{color:'orange'}}>{String(this.state.a).toUpperCase()}</h3></div>
                   <div>
                   <h3>Contact Details:</h3>
                   </div>
                   <div style={{color:'brown'}}>
                   (A) Email Adress: {this.state.b}
                   </div>
                   <div style={{color:'brown'}}>
                   (B) Mobile Number: {this.state.c}
                   </div>
                   <div style={{color:'brown'}}>
                   (C) Meeting Point: {this.state.f}
                   </div>
                   <div>
                   <h3>Doctor's Personal Detail:</h3>
                   <div style={{color:'brown'}}>
                   (A) Degrees: {this.state.e}
                   </div>
                   <div style={{color:'brown'}}>
                   (B) Practice (Specialisation): {this.state.d}
                   </div>
                   <div>
                   <h3>Meeting Point:</h3>
                   </div>
                   <div style={{color:'brown'}}>
                   (A) Meeting's Timing From: {this.state.g}
                   </div>
                   <div style={{color:'brown'}}>
                   (B) Meeting Till: {this.state.h}
                   </div>
                   <div>
                   <h3>Required Information:</h3>
                   </div>
                   <div style={{color:'orange'}}>
                   (A) Request made on info: {this.state.j}
                   </div>
                   <div style={{color:'orange'}}>
                   (B) Status : {String(this.state.i).toUpperCase()}
                   </div>
                   <div style={{color:'orange'}}>
                   (C) Handling By : {String(this.state.admin).toUpperCase()}
                   </div>

                   </div>
           </div>
             </div>
      </div>
      <div>
 </div>
 <br></br>
 <br></br>
 <div className="card text-center m-3 forall">
 <div className="card text-center m-3">
  <div className="card-header grid"><h2 style={{color:'purple'}} >Please Verify :</h2><h1 style={{color:'red'}}>{this.state.title}</h1><h2 style={{color:'purple'}}> if the status is still pending</h2></div>
<br></br>
<h3>Enter Below Your Admin ID:</h3>
 <input className="card-header"
                 type='text'
                 value={idss1}
                 placeholder='Enter Your Admin Id'
                 id='name'
                 required={true}
                 onChange={this.Changes1}
               />
  <br></br>
  <h3>Enter Below Your Admin Password:</h3>
  <input  className="card-header"
                 type='text'
                 value={idss2}
                 placeholder='Enter Your Password'
                 id='name'
                 required={true}
                 onChange={this.Changes2}
               />
<br></br>
<div>{this.state.got}</div>
<div className="card-header forall">             
<button onClick={this.handleClickEventsF} className=" btn btn-danger">Click Here To Respond To Verification</button>
</div>  

    </div>
    </div>
    </div>

       );

     }
     else {
      return(
        <div><h1 style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18, marginDown : 120,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}><p style={{marginLeft:380}}>Doctor's-Id Status Panel</p></h1>
        <div className='forall'>
        <div className='forall'>
          <div className="card-header text-center">
       <input
                 type='text'
                 value={email}
                 className="card-header paddr" 
                 placeholder="Enter the Doctor's Email Id here"
                 id='name'
                 required={true}
                 onChange={this.Changes}
               />
              
  <div className="text-center butt">
   <button  className="btn btn-success" onClick={this.handleClickEvents} value={title}>Click Here To Get Details</button>
   </div>
  
   </div>

 <br></br>
 <div className="card text-center m-3 forall"> 
      <div className="card text-center m-3">
               <h5 className="card-header">Enter A valid Email</h5>
               <div className="card-body">
                   <div><h3 style={{color:'red'}}>The Email ID doesn't Exist</h3></div>
                   </div>
                   </div>
                   </div>
                   </div>
                   <h1 style={{marginTop:400}}>.</h1>
                   </div>
                   </div>
      );

     }

    }
  }
  else{
    return(
      <>
      <div className="text text-center" style={{marginTop:20}}>
        Unauthorized Access, Please Try loging in again
      </div>
      </>
    );



  }

  };

  render() {
    if(this.now){
    return (
        <div className='forall'>
          
        <Navbar style={{fontSize: '1.0rem', fontWeight:100, fontFamily: 'Roboto',height:75}}  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand onClick={() => {
                this.setState({ current: 'login' });
              }}> <BsFillAlarmFill/> Home </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link  onClick={() => {
                this.setState({ current: 'doctor' });
              }}><IoIosPaper/> Get Sign-Up Details</Nav.Link>
        <Nav.Link href="http://localhost:8001/ad/docconfirm"><IoIosBriefcase/> Open Doctors Console</Nav.Link>
        <Nav.Link href="http://localhost:8001/ad/patcon"><IoLogoReddit/> Open Patient's Console</Nav.Link>
        
        <Nav.Link href="#pricing"><IoIosBuild/></Nav.Link>
        <NavDropdown title="Admin Panel" id="collasible-nav-dropdown"> 
        <NavDropdown.Item onClick={() => {
                this.setState({ current: 'Docss' });
              }}>View Your-Aid Doctors</NavDropdown.Item>
        <NavDropdown.Item onClick={() => {
                this.setState({ current: 'Admin-log' });
              }}>View Admin Log</NavDropdown.Item>
        <NavDropdown.Item onClick={() => {
                this.setState({ current: 'reset' });
              }}>Reset ID</NavDropdown.Item>
         <NavDropdown.Item onClick={() => {
                this.setState({ current: 'payment' });
              }}>Pending Payments</NavDropdown.Item>
          <NavDropdown.Item onClick={() => {
                this.setState({ current: 'Appointall' });
              }}>All Appointments</NavDropdown.Item>
        <NavDropdown.Divider /> 
        <NavDropdown.Item onClick={this.Destroy}>LOG OUT</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link onClick={() => {
                this.setState({ current: 'Supp' });
              }}><IoIosListBox/> Open Support Center</Nav.Link>
        <Nav.Link eventKey={2} onClick={() => {
                this.setState({ current: 'abhi' });
              }}>
         <IoIosLink/> 
        Contact Your-Aid Engineers 
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
          {this.renderForm(this.state.current)} 
        </div>
        
    );
 

    }
    else{
      return(
        <>
        <div className="text text-center" style={{marginTop:20}}>
         <ul><h1>Unauthorized Access, Please Try loging in again</h1> 
         <h1 style={{marginLeft:250,height:100,width:900}}><AiFillApi/></h1></ul>
        </div>
        </>
      );
    }
  }
}

export default MainPage;
