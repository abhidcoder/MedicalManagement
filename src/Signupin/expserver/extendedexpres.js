const express = require("express");
const path = require("path"); 
const app = express();
//install
require("dotenv").config();
const cors = require("cors");
app.use(cors());
//changes
const router = express.Router();
const Handles = require("./views/db/docconfirmed");
const Handle = require("./views/db/pasiupsc");
const staticPaths= path.join(__dirname, "./views");
router.use(express.static(staticPaths));
app.set("view engine","hbs");
router.use(express.urlencoded({extended:false}));

//this will be rendered on root /extd/
router
  .route("/").get((req, res) => {
res.send("hello for the express routes"); 
});

router.route("/docconfirm").get((req, res) => {
    res.render("docconfirm"); 
    });

//updation
router.route("/db").post(async(req, res) => {
    try{
    const A= req.body.das;
    const B=await Handles.findOne({Email:A});
    const BB=B.Email;
     if(typeof BB!= 'undefined'){
    if(req.body.egyarah==="First_Name"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {First_Name:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc);
              })
     };
     if(req.body.egyarah==="Last_Name"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Last_Name:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.egyarah==="Email"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Email:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.egyarah==="Image"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Image:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.egyarah==="Description"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Description:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.egyarah==="Check_Up_Address"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Check_Up_Address:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.egyarah==="Doctors_Phone"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Doctors_Phone:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.egyarah==="Doctors_Licence"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Doctors_Licence:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.egyarah==="Password"){
        Handles.findOneAndUpdate(
            {Email:req.body.das},
             {Password:req.body.baarah},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
    
              res.send('<script>window.alert("Your Update was a Success");window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
            }
        }
        catch (error) {
            res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
        }
                        

        });

//for deletion
router.route("/del").post(async(req, res) => {
    try{
        const A= req.body.dash;
        const B=await Handles.findOne({Email:A});
        const BBBB=B.Email;
        const BB=await Handles.findOneAndDelete({Email:A});
            if(typeof BB!= 'undefined'){
                      res.send('<script>window.alert("Your Delete was a Success");window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
                    }
                }
                catch (error) {
                    res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
                }
                                
                });


//for block/unblock

router.route("/block").post(async(req, res) => {
    try{
        const A= req.body.dashh;
        const B=await Handles.findOne({Email:A});
        const BBBB=B.Email;
        const BB=await Handles.findOneAndUpdate({Email:A},
        {Status:req.body.blockk});
            if(typeof BB!= 'undefined'){
                      res.send('<script>window.alert("ID is Block/Unblock was a Success");window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
                    }
                }
                catch (error) {
                    res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
                }
                                
                });

//Profile Check
//rendering only the required data
router.route("/statt").post(async(req, res) => {
    try{
        const A= req.body.dashin;
        const B=await Handles.findOne({Email:A});
        const BB=B.Email;
            if(typeof BB!= 'undefined'){
                        const NN=Handles.findOne({Email:A}).lean().exec(function(err, doc) {
                            const M={
                            "Doctor's First Name":doc.First_Name,
                            "Doctor's Last Name":doc.Last_Name,
                            "Doctor's Email":doc.Email,
                            "Doctors Picture Link":doc.Image,
                            "Doctor's Job Description":doc.Description,
                            "Doctor's Work Address":doc.Check_Up_Address,
                            "Doctor's Phone Number":doc.Doctors_phone,
                            "Doctor's Licence Number":doc.Doctors_Licence,
                            "Doctor's Passwrod":doc.Password,
                            "Doctor's Status On Your-Aid":doc.Status};
                            res.write("\t"+"READING RAW DATA FROM YOUR-AID DATABASE"+"\n"+"\n");
                            res.write(JSON.stringify(M,null,100)+"\n");
                            res.end();
                            //console.log(doc);
                            //res.json(doc);
                            //res.send(M);

                        }
                        
                      );
                    }
                    //res.send('<script>window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
                }
                catch (error) {
                    res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
                }
                                
                });


//PATIENT-CONSOLE


router.
  route("/patcon").get((req, res) => {
    res.render('patconsole'); 

    });


//updation
router.route("/dbms").post(async(req, res) => {
    try{
    const A= req.body.oonee;
    const B=await Handle.findOne({email:A});
    const BB=B.email;
     if(typeof BB!= 'undefined'){
    if(req.body.twoo==="fname"){
        Handle.findOneAndUpdate(
            {email:req.body.oonee},
             {fname:req.body.thrree},
              {new: true},
              function(err,doc){
                  console.log(doc);
              })
     };
     if(req.body.twoo==="lname"){
        Handle.findOneAndUpdate(
            {email:req.body.oonee},
             {lname:req.body.thrree},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.twoo==="email"){
        Handle.findOneAndUpdate(
            {email:req.body.oonee},
             {email:req.body.thrree},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.twoo==="phone"){
        Handle.findOneAndUpdate(
            {email:req.body.oonee},
             {phone:req.body.thrree},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.twoo==="aadhar"){
        Handle.findOneAndUpdate(
            {email:req.body.oonee},
             {aadhar:req.body.thrree},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
     if(req.body.twoo==="password"){
        Handle.findOneAndUpdate(
            {email:req.body.oonee},
             {password:req.body.thrree},
              {new: true},
              function(err,doc){
                  console.log(doc)
              })
     };
    
              res.send('<script>window.alert("Your Update was a Success");window.location.href= "http://localhost:8001/ad/patcon";</script>');
            }
        }
        catch (error) {
            res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/patcon";</script>');
        }
                        

        });

//Profile Check
//rendering only the required data
router.route("/statue").post(async(req, res) => {
    try{
        const A= req.body.fourr;
        const B=await Handle.findOne({email:A});
        const BB=B.email;
            if(typeof BB!= 'undefined'){
                        const NN=Handle.findOne({email:A}).lean().exec(function(err, doc) {
                            const M={
                            "Patient's First Name":doc.fname,
                            "Patient's Last Name":doc.lname,
                            "Patient's Email":doc.email,
                            "Patient's Contact Info":doc.phone,
                            "Patient's Adhaar":doc.aadhar,
                            "Patient's Password":doc.password}
                            res.write("\t"+"READING RAW DATA FROM YOUR-AID DATABASE"+"\n"+"\n");
                            res.write(JSON.stringify(M,null,100)+"\n");
                            res.end();
                            //console.log(doc);
                            //res.json(doc);
                            //res.send(M);

                        }
                        
                      );
                    }
                    //res.send('<script>window.location.href= "http://localhost:8001/ad/docconfirm";</script>');
                }
                catch (error) {
                    res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/patcon";</script>');
                }
                                
                });


//for deletion
router.route("/deling").post(async(req, res) => {
    try{
        const A= req.body.eightt;
        const B=await Handle.findOne({email:A});
        const BBBB=B.email;
        const BB=await Handle.findOneAndDelete({email:A});
            if(typeof BB!= 'undefined'){
                      res.send('<script>window.alert("Your Delete was a Success");window.location.href= "http://localhost:8001/ad/patcon";</script>');
                    }
                }
                catch (error) {
                    res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/patcon;</script>');
                }
                                
                });


//for block/unblock

router.route("/blockked").post(async(req, res) => {
    try{
        const A= req.body.ssixx;
        const B=await Handle.findOne({email:A});
        const BBBB=B.email;
        const BB=await Handle.findOneAndUpdate({email:A},
        {Status:req.body.ssevenn});
            if(typeof BB!= 'undefined'){
                      res.send('<script>window.alert("ID is Block/Unblock was a Success");window.location.href= "http://localhost:8001/ad/patcon";</script>');
                    }
                }
                catch (error) {
                    res.send('<script>window.alert("No such ID exists");window.location.href= "http://localhost:8001/ad/patcon";</script>');
                }
                                
                });




module.exports = router;

