const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Youraid",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from numbers")).catch((err)=>console.log(err));

const NumberSchema = new mongoose.Schema(
  {
    number:{
      type: String,
      required: true
  }
  }
);



const Number = mongoose.model("number",NumberSchema);

module.exports = Number;
