const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/Youraid",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from confirmdoc")).catch((err)=>console.log(err));

//creating schema for the database that has been connected by using the above code

const expSchema=new mongoose.Schema({
    First_Name:{
        type: String,
        //required: true
    },
    Last_Name:{
        type: String,
        //required: true
    },
    Email:{
        type: String,
        unique: true,
        //required: true
    },
    Image:{
        type: String,
        //required: true
    },
    practice:{
        type: String,
        enum: ['Paediatrician','Orthopaedic','General-Physician','Audiologist'],
        //required: true
    },
    Description:{
        type: String,
        //required: true
    },
    Check_Up_Address:{
        type: String,
        //required: true
    },
    Doctors_Phone:{
        type: String,
        unique: true,
        //required: true
    },
    Doctors_Licence:{
        type: String,
        unique: true,
        //required: true
    },
    Password:{
        type: String,
        //required: true
    },
    Status:{
        type: String,
        //required: true
    }
  
  
})
const Datass= new mongoose.model("docconfirm",expSchema);

//helping to load all the mongodatabase contents in the front end
/*app.get("/", (req, res) => {
    Data.find({})
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  });*/

/*
  Datass.findOneAndUpdate(
    {Email:"abhidcoder@gmail.com"},
    {Description:"baarah"},
    {new: true},
    function(err,doc){
        console.log(doc)
    })*/
  
module.exports = Datass;