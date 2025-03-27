import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema({
   username:{
    type: String,
    require: true,
    unique : true,
    trim: true,
    index: true,
    
   },
   email:{
    type: String,
    require: true,
    unique : true,
    trim: true,
   
   },
   fullname:{
    type: String,
    require: true,
    trim: true,
    index: true,
   },
})


export const User = mongoose.model("User", userSchema)