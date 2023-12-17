const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/Youraid",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from doctor")).catch((err)=>console.log(err));

//creating schema for the database that has been connected by using the above code

const docSchema=new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        phone: {
          type: Number,
          required: true,
          unique: true
        },
      practice:{
          type: String,
          enum: ['Paediatrician','Orthopaedic','General-Physician','Audiologist'],
          required: true
      },
      degree:{
        type: String,
       required: true
    },
        adress: {
          type: String,
          required: true,
        },
      meeting_detailsFrom: {
        type: String,
        required: true,
      },
      meeting_detailsTo: {
        type: String,
        required: true,
      },
      status:{
        type:String
      },

    updatedOn: { type: Date ,default: Date.now },

      admin_handling:{
        type:String
      },
    }
    );
    


const Doctor = new mongoose.model("DoctorSignUp",docSchema);

module.exports = Doctor;