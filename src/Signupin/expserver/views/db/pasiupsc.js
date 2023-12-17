const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Youraid",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from patient")).catch((err)=>console.log(err));

const patientSchema = new mongoose.Schema(
  {
    fname:{
      type: String,
      required: true
  },
  lname:{
    type: String,
    required: true
},
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
        unique: true
      },
    aadhar:{
        type: String,
        required: true,
        unique: true
    },
      password: {
        type: String,
        required: true,
      },
      Status:{
        type: String,
        required: true,

      },
      keyy:{
        type: String
      }
  }
);



const Patient = mongoose.model("patientsignup", patientSchema);

module.exports = Patient;
