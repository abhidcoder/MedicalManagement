const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Youraid",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from appointment")).catch((err)=>console.log(err));

const appointmentSchema = new mongoose.Schema(
  {
 docfullname:{
      type: String,
      //required: true
  },
  docemail:{
    type: String,
    //required: true
    },
  patemail: {
        type: String,
        //required: true,
        //unique: true,
      },
  patname: {
        type: String,
        //required: true,
        //unique: true,
      },
  time: {
        type: String,
        //required: true,
        //unique: true
      },
  status:{
    type: String,
    //required: true,
  },
  practice:{
    type: String,
    //required: true,
  },
  docnumber:{
    type: String,
    //required: true,
  },
  docaddress:{
    type: String,
    //required: true,
  },
  payment:{
    type:String
  },
  imgl:{
    type:String
  },
  patphone:{
    type:String
  },
  reqested_on: { type: Date ,default: Date.now },
  }
);



const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports =  Appointment;