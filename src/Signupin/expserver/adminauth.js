const Handledoc = require("./views/db/adinsc");
//const jwt = require("jsonwebtoken");


const authadmin= async(req, res, next)=>{
   const email=String(req.body.six);
    //tokenn=jwt.sign({_id: "5fb86aaf569ea945f8bcd2e2"}, "mynameisabhishekkumarsingh", { expiresIn: "2000000 seconds"});
   // if (tokenn == null) return res.sendStatus(401)
   try{
    const value = await Handledoc.findOne({Email:email});
    res.cookie("AdminAbhishekId",value.adminid,{expires: new Date(Date.now()+400000000000),httpOnly:false});
    //res.cookie("AdminAbhishekName",value.First_Name,{expires: new Date(Date.now()+400000000000),httpOnly:false});
    next();
   }
   catch (error) {
    res.send('<script>window.alert("oops! Invalid Login Details");window.location.href= "http://localhost:8001/patient";</script>');
    //res.status(400).send(error);
  }

     //---->this is valid for all scripts for cookies
     
    
    //res.cookie("ByAbhishekToken",{email:value.email,name:value.fname},{expires: new Date(Date.now()+400000000000),httpOnly:true});
    //to pass the values to the server using this middleware
    //req.toks=tokenn;
    //In the sever write the same code in order to obtain the values from the middleware
    //jwt.verify(tokenn,"mynameisabhishekkumarsingh", (err,_idde) => {
      //console.log("I am The Idee",_idde)
      //if (err) return res.sendStatus(403)
      //req._idde = _idde
   
   // })
  }

  module.exports = authadmin;


  //to use it as a middleware

//COOKIE EXAMPLE
// app.get("/check",authenticateToken,(req, res) => {
//     console.log(req._idde);
//     console.log(req.toks);
//     //this is valid for all scripts for cookies
//     res.cookie("jwt",req.toks,{expires: new Date(Date.now()+400000),httpOnly:true});
//    res.json({j:"hello"});
// });
