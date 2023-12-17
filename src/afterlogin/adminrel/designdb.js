//fetching files form mongoview.js
import { Button, Modal, Dropdown } from "react-bootstrap";
import { useState, useEffect} from "react";
import "./Appy.css";
import * as React from 'react';



function MyVerticallyCenteredModal(props) {

  return (
    <div className="forall">
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.title} {props.Introduction}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.Description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
//alert("oyee");
function Desi() {
  const [runing, setRuning] = useState(
    {
      runing:"2"
    },
  );

  const Runing = (e) => {
    setRuning({
     runing:"2"
     
    });
  };  
  
  const [modalShow, setModalShow] = useState(false);
  const [Fetchdoc, setFetchdoc] = useState([
    {
      // First_Name: "",
      // Last_Name:"",
      // Email:"",
      // Phone:"",
      // Description: "",
      // Check_Up_Address:""
    },
  ]);

  const [doct, setDoct] = useState({
    First_Name: "",
    Intro:"",
    Description: "",
    Check_Up_Address:""
  });


  const [renn,setRenn] = useState({
    renn:"a",
  });

  const handleRenn = (e) => {
    Runing();
    setRenn({
     renn:"a",
     
    });
  };  

  const handleRenn1 = (e) => {
    Runing();
    setRenn({
     renn:"aa",
    
    });
    
  };  

  const handleRenn2 = (e) => {
    Runing();
    setRenn({
     renn:"aaa"
    });
    
  };  

  const handleRenn3 = (e) => {
    Runing();
    setRenn({
     renn:"aaaa"
    });
   
  };  

  const handleRenn4 = (e) => {
    Runing();
    setRenn({
     renn:"aaaaa"
    });
   
  };  

  
 


//'Paediatrician','Orthopaedic','General-Physician','Audiologist'
  useEffect(() => {
    if(runing.runing==="2")
    {
    console.log(runing.runing);
    if(renn.renn==="a"){
    fetch("http://localhost:8001/docconfirmed")
      .then((res) => res.json())
      .then((jsonRes) => setFetchdoc(jsonRes),[]);}
    else if(renn.renn==="aa"){


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ practice:'Orthopaedic' })

    };
    fetch('http://localhost:8001/docconfirmed1',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setFetchdoc(jsonRes));


    }
    else if(renn.renn==="aaa"){


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ practice:'Paediatrician' })
    };
    fetch('http://localhost:8001/docconfirmed1',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setFetchdoc(jsonRes));


    }
    else if(renn.renn==="aaaa"){


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ practice:'General-Physician' })
    };
    fetch('http://localhost:8001/docconfirmed1',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setFetchdoc(jsonRes));


    }
    else if(renn.renn==="aaaaa"){


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ practice:'Audiologist' })
    };
    fetch('http://localhost:8001/docconfirmed1',requestOptions )
        .then(response => response.json())
        .then((jsonRes) => setFetchdoc(jsonRes));


    }
    runing.runing="stop";
   // console.log(runing.runing);
  }
    
  });

  const handleClick = (e) => {
    setModalShow(true);
    const { name, alt,id} = e.target;
    
    

    setDoct({
      First_Name: name,
      Intro: id,
      Description: alt,
    });
  };
  
  

  return (
    
    <div className="column">
      <h2 style={{color:'purple',fontWeight: 'bold'}} className="msgs">Click On The Images To Get More Details On Your-Aid Doctors</h2>
      <div style={{marginLeft : 50, marginTop : 20, marginDown : 90,  display: "block", width: "30%", height: "40%" }}>
    <Dropdown>
    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{paddingTop : 12,paddingLeft : 975, paddingBottom : 12, paddingRight : 40, paddingDown : 100,color:'white' }}>
    <h4 style={{textAlign: 'right'}}>
      Click Here To Choose Category
      </h4>
     
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item onClick={handleRenn}>View All Doctors</Dropdown.Item>
      <Dropdown.Item onClick={handleRenn1}>Orthopaedic</Dropdown.Item>
      <Dropdown.Item onClick={handleRenn2}>Paediatrician</Dropdown.Item>
      <Dropdown.Item onClick={handleRenn3}>General-Physician</Dropdown.Item>
      <Dropdown.Item onClick={handleRenn4}>Audiologist</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>

      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   width: "20%",
        //   margin: "auto auto",
        // }}
        className="forall"
      >
        {Fetchdoc
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
            const Name=doct.First_Name;
            const First=doct.Doctors_Licence;
            const Last=doct.Last_Name;
            const Lasts=doct.practice;
          
            return (
              <l1><ul><button className="btn btn-dark" style={{marginLeft : 200, marginTop : 80, display: "block", width: "15%", height: "40%" }}>Your-Aid Doctor's Licence Number { First }</button>

              <div className="more">
                
              <img
                //key={/**/}
                id={" ( Call@" +String(doct.Doctors_Phone)+" )"}
                src={doct.Image}
                alt={String(doct.Description)+" Email-ID@ "+String(doct.Email)}
                name={String(doct.First_Name)+" "+String(doct.Last_Name)}
                width="260" 
                height="190"
                onClick={handleClick}
              ></img>
              <l1 style = {{ marginLeft : 20, color:'black', 'font-size': '32px',fontWeight:100}} > {String(Name)+" "+String(Last)}<ul style={{ marginTop : 10, color:'brown', 'font-size': '22px',fontWeight: 80}}>{String(Lasts)}</ul></l1> 
              <br></br>
              <br></br>
              </div>
              </ul></l1>
            );

          })}
      </div>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={doct.First_Name}
        Introduction={doct.Intro}
        Description={doct.Description}
      />
    </div>
  );
  
}

export default Desi;