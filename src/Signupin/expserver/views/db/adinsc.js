const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Youraid",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from admin")).catch((err)=>console.log(err));


const adminSchema = new mongoose.Schema({
    adminid: String,
    password: String,
  });
  
  
  const admin = new mongoose.model("adminlogin", adminSchema);

module.exports = admin; 