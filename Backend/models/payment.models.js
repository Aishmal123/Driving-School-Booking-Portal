import mongoose from "mongoose";
const paymentSchema=new mongoose.Schema({
    Transaction_id:{
        type:String,
        required:true,
         unique: true 
    },
    name:{
        type:String,
        required:true
    },
    bookingid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    currency:{
        type:String,
        required:true,
         uppercase: true, 
      default: "PKR"
    },
    status:{
        type:String,
        enum:["completed","pending","cancelled"],
        default:"pending"
    },
    amount:{
        type:String,
        required:true
    }
},{timestamps:true})
export const Payment=mongoose.model("Payment",paymentSchema)