import mongoose from 'mongoose'
const instructorSchema=new mongoose.Schema({
   firstname:{
        type:String,
        required:true
    },
    secondname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        maxlength:[16,"password should not be greater then 16 characters"],
         minlength:[4,"password should not be greater then 16 characters"]
    },
    healthcertificate:{
        type:Image,
        required:true
    },
    license:{
        type:Image,
        required:true
    },
    date_of_birth:{
        type:Date,
        required:true
    },
    gender:{
        enum:["M","F","Others"],
        required:true
    },
    phone: {
      type: String,
      required: true,
    },
    city:{
        type:String,
        required:true
    },
    postalCode:{
        type:String,
        
    },
    license_no:{
        type:String,
        required:true
    },
    vehicletype:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vehicle",
        required:true

    }

},{timestamps:true})
export const Instuctor=mongoose.model("Instructor",instructorSchema)