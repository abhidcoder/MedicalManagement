const async = require("hbs/lib/async");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Youraid",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from support")).catch((err)=>console.log(err));

const supportSchema = new mongoose.Schema(
  {
    
      name:{  //ga
              type: String,
              required: true,
          },
      
    
      email: {  //gar
        type: String,
        required: true,
        //unique: true,
      },
      phone: { //gari
        type: String,
        required: true,
        //unique: true
      },
   
      message: {  //garima
        type: String,
        required: true,

      }
  }
);


const Support = mongoose.model("AllSupport", supportSchema);

module.exports = Support;


