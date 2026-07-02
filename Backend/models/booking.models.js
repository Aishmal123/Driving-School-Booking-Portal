import mongoose from "mongoose";
const bookingSchema=new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    payment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment",
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Instructor",
        required:true
    },
    vehicletype:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vehicle",
        required:true
    },
     status:{
        type:String,
        enum:["completed","pending","cancelled"],
        default:"pending"
    },
    timeslot:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Instructor",
        required:true,
    },
},{timestamps:true})
export const Booking=mongoose.model("Booking",bookingSchema)