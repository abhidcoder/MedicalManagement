import React from 'react';
//import './Appyss.css';
import {  Navbar,Nav,Container} from "react-bootstrap";
import Dpend from "../../appointment/pendingfordoc";
import Dpendc from "../../appointment/confirmfordoc";
import Cookies from 'js-cookie';
import {BsBookmarkXFill,BsArrowReturnRight,BsBookmarkCheck,BsCaretRightSquareFill,BsChatSquareTextFill} from "react-icons/bs";
import {AiFillApi} from 'react-icons/ai';


class MainPage extends React.Component {
  

    state = {current: 'login'};


 Destroy=(e)=> {
  Cookies.remove('DocAbhishekName');
  Cookies.remove('DocAbhishekEmail');
  window.location.href="http://localhost:3000";

 }

 now = Cookies.get('DocAbhishekName');
 now2 = Cookies.get('DocAbhishekEmail');
   // componentDidMount() only works when rendered for the first time
//    componentDidMount(){
//     fetch("http://localhost:8001/docconfirmed")
//     .then((res) => res.json())
//     .then((jsonRes) => this.setState({Fetchdoc:jsonRes}));
//    }


  //componentDidUpdate() {
      //console.log(this.state.renn);
  //}



  renderForm = (current) => {
    //console.log(this.state.see)
if(this.now2 && this.now){
if (current === 'login') {

            return(
            <div>
            <Dpend/>
            </div>);

    }
    else if(current === 'reset')
    {
      return(
        <div>
         hi
        </div>
      )



    }
    else if(current==='Patient-key'){
        return(
            <div className="text center">
                what's Up?
            </div>
        );
     

   
        }

else if (current === 'doctor') {

    return(<div style={{maxHeight:'auto'}}>
       <Dpendc/>
    </div>)

  };
}
else{
 return (
  <div className="text text-center" style={{marginTop:20}}>
   Unauthorized Access Please Try Login
  </div>
 )


}
}

  render() {
    
    if(this.now && this.now2){
    return (
        <div className='forall'>
        <Navbar style={{fontSize: '1.2rem', fontWeight:100, fontFamily: 'Roboto',height:75}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand onClick={() => {
                this.setState({ current: 'login' });
              }}><BsBookmarkXFill/> Pending Appointments</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link onClick={() => {
                this.setState({ current: 'doctor' });
              }}><BsBookmarkCheck/> Confirm appointments</Nav.Link>
        <Nav.Link onClick={() => {
                this.setState({ current: 'Patient-key' });
              }}><BsCaretRightSquareFill/> Go To Patient Info</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="http://localhost:8001/quest"><BsChatSquareTextFill/> Open Support Center</Nav.Link>
        <Nav.Link onClick={this.Destroy}>
       <BsArrowReturnRight/> LOG OUT
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
              return (
                <div className="text text-center" style={{marginTop:20}}>
                <ul><h1>Unauthorized Access, Please Try loging in again</h1> 
                <h1 style={{marginLeft:250,height:100,width:900}}><AiFillApi/></h1></ul>
               </div>
              )
             }
    
  }
}

export default MainPage;
