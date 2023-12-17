const express = require("express");
const path = require("path"); 
const app = express();
const port = 8001;
//-->edit here
const Handle = require("./views/db/dosiupsc");
const Handleadmin = require("./views/db/adinsc");
const Handlepatient = require("./views/db/pasiupsc");
const Support = require("./views/db/support");
const Numm = require("./views/db/numbers");
const Adminauth = require("./adminauth");
//changed
const Handles = require("./views/db/docconfirmed");
require("dotenv").config();
const cors = require("cors");
app.use(cors());
//extending fo extededexpress
const things = require("./extendedexpres");
const async = require("hbs/lib/async");
app.use("/ad", things);
//For cookies and Tokens 
const patauth = require("./patientauth");
const docauth = require("./docauth");
const jwt = require("jsonwebtoken");
const cookieparser= require("cookie-parser");
const Appointments  = require("./views/db/appointment");
app.use(cookieparser());
//

const staticPath= path.join(__dirname, "./views");

app.set("view engine","hbs");

app.use(express.static(staticPath));

//for maintaining the format
app.use(express.json());

//to GET the data in the from the form
app.use(express.urlencoded({extended:false}));

// rendring on 8001
app.get("/index",(req, res) => {
res.render("index"); 
});

app.get("/",(req, res) => {
    res.send("Hello From the EXPRESS Server"); 
    });

//help & Support
app.get("/quest",(req, res) => {
    res.render("request"); 
    });
//-->for doctor SignUp & login validation
app.get("/doc",(req, res) => {
    res.render("doc"); 
    });



 app.all("/numbers",async(req, res) => {

    try {
        const handleData = new Numm({
            number: req.body.number
        })

       const handled = await handleData.save();
       res.status(201).render("pending");
    } catch (error) {
        res.send('<script>window.alert("Please Try different Phone");window.location.href= "http://localhost:8001/patient";</script>');
    }

        // try{
        // const gotitem=await Numm.findOne({email:req.body.email});
        // const found = gotitem.keyy
    
        // res.json({idee:found});}
        // catch(errr){
        //     console.log("i have Keyy & It is Not Found")
        // }
    
        
        });

app.all("/db/dosiupsc",async(req, res) => {

//for the database, passing the data
    try {
        const handleData = new Handle({
            fullname: req.body.eight,
            email: req.body.nine,
            phone: req.body.ten,
            practice: req.body.eleven,
            degree: req.body.twelve,
            adress: req.body.thirteennew,
            meeting_detailsFrom: req.body.fourteennew,
            meeting_detailsTo: req.body.fivfteennew,
            status: 'pending',
            admin_handling: 'NA'
        })

       const handled = await handleData.save();
       //After REGISTRATION sending the user to index file
       res.status(201).render("pending");
    } catch (error) {
        res.send('<script>window.alert("Please Try different Phone or Email Id");window.location.href= "http://localhost:8001/doc";</script>');
    }

    });

app.all("/db/dosiupscs",docauth,async(req, res) => {
        const ssix=req.body.fourteen;
        if(typeof ssix != 'undefined'){
            try {
                const onee=String(req.body.fourteen);
                const twoo=String(req.body.fifteen);
                const abcd = await Handles.findOne({Email:onee});
                if (abcd.Email===onee && abcd.Password===twoo && abcd.Status!="Blocked"){
                 
                   res.redirect("http://localhost:3000/docc1");
                }
               else{
                res.send('<script>window.alert("Invalid Login Details Please Try again!");window.location.href= "http://localhost:8001/doc";</script>');
                }
             } catch (error) {
                res.send('<script>window.alert("Invalid Login Details Please Try again!");window.location.href= "http://localhost:8001/doc";</script>');
                // res.status(400).send(error);
             }
    }
        });


//-> admin login & render
app.get("/admin",Adminauth,(req, res) => {
    res.render("admin"); 
    });

    app.post("/db/adinsc",async(req, res) => {
     if(typeof  req.body.six!= 'undefined'){
        try {
           const onee=req.body.six;
           const twoo=req.body.seven;
           const abcd = await Handleadmin.findOne({adminid:onee});
           if (abcd.adminid===onee && abcd.password===twoo){
            
              res.redirect("http://localhost:3000/adco");
           }
          else{
            res.send('<script>window.alert("oops! Invalid Login Details");window.location.href= "http://localhost:8001/admin";</script>');
           }
        } catch (error) {
            res.send('<script>window.alert("oops! Invalid Login Details");window.location.href= "http://localhost:8001/admin";</script>');;
        }
    }
    });



//->Patients Login and SingUp
app.get("/patient",(req, res) => {
    res.render("pat"); 
    });

app.all("/db/pasiupsc",patauth,async(req, res) => {
    const ssix=String(req.body.twentyone);
    //console.log(req.body.twentyone);
    if(typeof ssix != 'undefined'){
   try{
        const six=String(req.body.twentyone);
        //const six=Number(req.body.twentyone);
        const secc= String(req.body.twentytwo);
        const abcd = await Handlepatient.findOne({email:six});
       if (abcd.email===six && abcd.password===secc){
         //res.send({g:"i am in"});   
         //console.log(`cookies are here ${req.cookies.ByAbhishek.email}`);
        res.redirect("http://localhost:3000/adco4"); 
        }
    else{
        res.send('<script>window.alert("oops! Invalid Login Details");window.location.href= "http://localhost:8001/patient";</script>');
     }
  } catch (error) {
    res.send('<script>window.alert("oops! Invalid Login Details");window.location.href= "http://localhost:8001/patient";</script>');
    //res.status(400).send(error);
  }

}

    });

//patient signUP
app.all("/db/pasiupscs",async(req, res) => {

    try {
        const handleData = new Handlepatient({
            fname: req.body.sixteen,
            lname: req.body.seventeen,
            email: req.body.eighteen,
            phone: req.body.nineteen,
            aadhar: req.body.aadhar,
            password: req.body.twenty,
            Status : "Pending",
            keyy:"12345"
        })

       const handled = await handleData.save();
       //After REGISTRATION sending the user to index file
       res.status(201).render("index");
    } catch (error) {
        res.send('<script>window.alert("Please Try different Aadhaar No. or Phone No. or Email ID");window.location.href= "http://localhost:8001/patient";</script>');
       
    }


});
 // doctors confirmation

    app.post("/db/docconfirmed",async(req, res) => {
      try {
          const handleDatam = new Handles({
            First_Name: req.body.ek,
            Last_Name: req.body.do,
            Email: req.body.teen,
            Image: req.body.char,
            practice: req.body.elevemm,
            Description: req.body.panch,
            Check_Up_Address: req.body.cheh,
            Doctors_Phone:req.body.saath,
            Doctors_Licence: req.body.aath,
            Password: req.body.nooo,
            Status: "Pending"
          })
  
         const handled = await handleDatam.save();
         //After REGISTRATION sending the user to index file
         res.render("index");
         
      } catch (error) {
          res.status(400).send(error);
      }
      });
      
 //fetching data from mongodb and by using useeeffect printing the data in front end in mongo  
 //Rednering full data on the page   
app.get("/docconfirmed", (req, res) => {
        Handles.find({})
          .then((items) => res.json(items))
          .catch((err) => console.log(err));
      }
      
      );

//getting all the data for the doctors
app.all("/docconfirmed1",async(req, res) => { 
   
    await Handles.find({practice:req.body.practice}).then((items) => res.json(items)).catch((err) => console.log(err));

  });


      

//Fetch API

app.post("/emuu", async(req, res) => { 
  
    //const x= await Handle.findOne({status:"pending"});
   
        await Handle.findOne({status:"pending"}).lean().exec(function(err, doc) {
            //console.log(doc);
            try{
                res.json({
                  b:doc.email,i:doc.status
                    
                });
            }
            catch(e){
       
                res.json({
                    b:"No Signup Request Available For Now",i:"Not Available"
                })
        }
         
        });

    }
        
);






app.post("/em", async(req, res) => {
    const A=req.body.email;
    //It will always run
  
    if(typeof A != 'undefined'){
        try{ 
        const B=await Handle.findOne({email:A});
        const BB=B.email;
        if(typeof BB!= 'undefined'){

        const NN=await Handle.findOne({email:A}).lean().exec(function(err, doc) {
        //console.log(doc);
            res.json({a:doc.fullname, b:doc.email, c:doc.phone, d:doc.practice,
                 e:doc.degree, f:doc.adress, g:doc.meeting_detailsFrom, 
                 h:doc.meeting_detailsTo, i:doc.status, j:doc.updatedOn,id:doc.admin_handling});
         
        });}
        // else{
        //     res.send('<script>window.alert("No such ID exists");</script>');
        // }
   
    }
    catch(error)
        {   
            //console.log(error);
            res.json({abhi:"OOps! INVALID ID."});
        }
    }
        
});


app.post("/em01", async(req, res) => {
    const A=req.body.email;
    const AA=req.body.password;
    const F=req.body.id;
    //It will always run
    try{
    const abcd = await Handleadmin.findOne({adminid:A});
    if (abcd.adminid===A && abcd.password===AA){
        try{
        const abcdd = await Handle.findOne({email:F});
        const gg= abcdd.status;
        if(gg==="pending"){
        try{ 
        //console.log("BIG HELLO")
        const B=await Handle.findOneAndUpdate(
            {email:F},
             {status:"In-process", admin_handling:A},
              {new: true},
              function(err,doc){
                  //console.log(doc);
              })
              res.json({gott:"The Request has been Successfully put In-process Under your ID"});
            }
            

    catch(error)
        {   
            //console.log(error);
            res.json({gott:"The Request has been Successfully put In-process Under your ID"});
        }
    }
    else{
        res.json({gott:"OOps! Request has been already taken up It is already in process "});
    }
}
    catch(error)
        {   
            //console.log(error);
            res.json({gott:"OOps! the Id is not found"});
        }
    }
    else{
        res.json({gott:"Invalid ID"});
    }
}
catch(error){
    res.json({gott:"OOps! INVALID Admin Login Details"});
}
        
});
//getting all data for pending signUp requests

app.all("/em02",async(req, res) => {

        try{
        const ccss=await Handleadmin.findOne({adminid:req.body.email});
        //console.log("hello");
    try{
            
        if(ccss.adminid===req.body.email && ccss.password===req.body.password){
    try{
            

                await Handle.find({admin_handling:req.body.email,status:"In-process"}).then((items) => res.json(items)).catch((err) => console.log(err));

            }
    catch(error)
        {
                res.json({gott:"No Such Id Exists"});
                //console.log("4");
            }

        }
        else{
            res.json({gott:"No Such Id Exists"});
            //only this runs in error case console.log("3");

        }
    }
    catch(error){
        
           res.json({gott:"No Such Id Exists"});
           // only this runs in error case console.log("2");
      
    }
        
    }
    catch(error){
      res.json({gott:"No Such Id Exists"});
      console.log("1");


        }
       

});

// Action on Doctor Sign-Up Response
app.all("/em03",async(req, res) => {

    await Handle.findOneAndDelete({email:req.body.delete});
    
    });


//Reset Admin-ID
app.post("/em04", async(req, res) => {
    const A=req.body.email;
    const AA=req.body.password;
    const Up1= req.body.newpass;
    const Up2= req.body.newpass2;
    //console.log(A,AA,Up1,Up2);
    try{
        const abcd = await Handleadmin.findOne({adminid:A});
        if (abcd.adminid===A && abcd.password===AA){
            try{
            const abcdd = await Handleadmin.findOne({adminid:A});
            if(Up1===Up2)
            {
            try{ 
            //console.log("BIG HELLO")
            const B=await Handleadmin.findOneAndUpdate(
                {adminid:A},
                 {password:req.body.newpass},
                  {new: true},
                  function(err,doc){
                      //console.log(doc);
                  })
                  res.json({gott:"Password Reset Was a Success"});
                }
                
    
        catch(error)
            {   
                //console.log(error);
                res.json({gott:"Password Reset Was a Success"});
            }
        }
        else{
            res.json({gott:"OOps! please make sure that new Password's both field matches "});
        }
    }
        catch(error)
            {   
                //console.log(error);
                res.json({gott:"OOps! the Id is not found"});
            }
        }
        else{
            res.json({gott:"Invalid ID Details"});
        }
    }
    catch(error){
        res.json({gott:"OOps! INVALID Admin Login Details Please Check Your Id"});
    }



});


//for  allsupport page
app.all("/yadav",async(req, res) => {
    if(typeof req.body.ga !== 'undefined' && typeof req.body.gar !== 'undefined'){
    try {
        const supportDatam = new Support({
          name: req.body.ga,
          email: req.body.gar,
          phone: req.body.gari,
          message: req.body.garima,
        })

       const support = await supportDatam.save();//if not works replace support for handled
       //After REGISTRATION sending the user to index file
       //res.render("index");
       res.send('<script>window.alert("Your query has been successfully registered.");window.location.href= "http://localhost:3000";</script>');
       
    } catch (error) {
        res.status(400).send(error);
    } }
    else{
        await Support.find({}).then((items) => res.json(items)).catch((err) => console.log(err));

    }
   
    

  });

  app.post("/abhishek",async(req, res) => {
      try{
        const A= req.body.idee;
        //const B=await Support.findOne({_id:A});
        //const BBBB=B._id;
        const BB=await Support.findOneAndDelete({_id:A});
          
            if(typeof BB!= 'undefined'){
                      res.json({msgg:"done"});
                      console.log("i am runing stop me");
                        res.end();
                     
                    }
                }
                catch (error) {
                    res.json({msgg:"errr"});
                    console.log(error);
                }

});




app.all("/keyy",async(req, res) => {
    try{
    const gotitem=await Handlepatient.findOne({email:req.body.email});
    const found = gotitem.keyy

    res.json({idee:found});}
    catch(errr){
        console.log("i have Keyy & It is Not Found")
    }

    
    });

//Appointment
app.all("/appointment", async(req, res) => { 
   
        const handleData = new Appointments({
            docfullname: req.body.docname,
            docemail: req.body.docemail,
            patemail: req.body.patemail,
            patname: req.body.patname,
            time: req.body.time,
            status:"Pending",
            practice:req.body.practice,
            docaddress:req.body.docaddress,
            docnumber:req.body.docnumber,
            payment:"Not Paid",
            imgl:req.body.imgl,
            patphone:req.body.patphone
        })

       const handled = await handleData.save();

       res.json({mssg:"Your Appointment Request Is In Pending Status For Now Plase Check After A While"});

    }
        
);


//Appointment

app.all("/delforall", async(req, res) => { 
    const Akss= req.body.id;
    try{
    const BB=await Appointments.findOneAndDelete({_id:Akss});
      if(typeof BB!= 'undefined'){
                res.json({msgg:"done"});
                  res.end();
              }
          }
        catch(error){
            res.json({msgg:"done"}); 
        }
});

app.all("/notdelforall", async(req, res) => { 
    const Akss= req.body.id;
    try{
    const BB=await Appointments.findOneAndUpdate({_id:Akss},{status:"Cancelled By Patient",payment:"Paid"});
      if(typeof BB!= 'undefined'){
                res.json({msgg:"done"});
                  res.end();
              }
          }
        catch(error){
            res.json({msgg:"done"}); 
        }
});

app.all("/penforall", async(req, res) => { 
    const abcd = await Appointments.find({patemail:req.body.emails,status:"Pending"}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.all("/inprocess", async(req, res) => { 
    const abcd = await Appointments.find({patemail:req.body.emails,status:"Approved",payment:"In-Process"}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});


app.all("/confirmforall", async(req, res) => { 
    const abcd = await Appointments.find({patemail:req.body.emails,status:"Approved",payment:"paid"}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.post("/updata", async(req, res) => { 
    const abcd = await Appointments.findOneAndUpdate({_id:req.body.id},{payment:req.body.updatas})
    .catch((err) => console.log(err));
});

app.all("/docpend", async(req, res) => { 
    const abcd = await Appointments.find({docemail:req.body.mail,payment:"Not Paid",status:"Pending"}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.post("/updatadoc", async(req, res) => { 
    const id=req.body.id;
    //console.log("yepp",req.body.id)
    //console.log("erro from line 595",id)
    const pay=req.body.pay;
    try{
    const abcd = await Appointments.findOneAndUpdate({_id:id},{payment:pay,status:"Approved"})
    .catch((err) => console.log(err));
    }
    catch(errr){
        console.log("No Values Yet There Inside")
    }
});

app.post("/updatadocchange", async(req, res) => { 
    /*console.log("payment",req.body.pay);console.log("id",req.body.id);console.log("time",req.body.datass)*/
    const id=req.body.id;
    const pay=req.body.pay;
    const datass=req.body.datass;
    //console.log("erro from line 609",id)
    try{
    const abcd = await Appointments.findOneAndUpdate({_id:id},{time:datass,payment:pay,status:"Approved"})
    .catch((err) => console.log(err));
    }
    catch(err){
        console.log("I am Empty")
    }
    

});

app.all("/confirmfordoc", async(req, res) => { 
    const abcd = await Appointments.find({docemail:req.body.emails,status:"Approved",payment:"paid"}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.post("/docconfirmss", async(req, res) => { 
    const id=req.body.id;
    //console.log(id);
    try{
    const abcd = await Appointments.findOneAndUpdate({_id:id},{status:"done",payment:"done"})
    .catch((err) => console.log(err));}
    catch(err){
        console.log("docconfirmss is Empty Now")
    }
    
});

app.all("/allforadmin", async(req, res) => { 
    const abcd = await Appointments.find({status:"Approved",payment:"admin"}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.all("/deleteforadmin", async(req, res) => { 
    //console.log(req.body.id);
    const abcd = await Appointments.findOneAndDelete({_id:req.body.id}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.post("/adminupdatess", async(req, res) => { 
    // console.log(req.body.id01);
    // console.log("From Admin");
    try{
    const abcd = await Appointments.findOneAndUpdate({_id:req.body.id01},{payment:"paid"}).then((items) => res.json(items))
    .catch((err) => console.log(err));}
    catch{
        console.log("I am Empty adminupdatess");
    }
});

app.all("/adminlogs", async(req, res) => { 
    const abcd = await Appointments.find({}).then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.post("/delforalls", async(req, res) => { 
    const Akss= req.body.id;
    try{
    const BB=await Appointments.findOneAndDelete({_id:Akss});
      if(typeof BB!= 'undefined'){
                //console.log("done);
              }
          }
        catch(error){
            console.log("Not processed /dellforalls");
        }
});


app.listen(port, () => {
    console.log('listening to the port ${port)');
 });



