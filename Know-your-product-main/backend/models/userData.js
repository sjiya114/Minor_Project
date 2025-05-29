import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    yourName: { type: String, required: true, min:3 },
    yourEmail:{ type: String, required: true },
    yourPassword: { type: String, required: true, min: 8 },
    phone: {type:String, required : true }
  });
  

  //So that the new model must not be created
  const userModel =  mongoose.model('User', userSchema);//modelName, schemaName
  
  export default userModel;