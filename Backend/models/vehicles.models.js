import mongoose from "mongoose";
const vehicleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     status:{
        type:String,
        enum:["registered","pending","cancelled"],
        default:"pending"
    },
    type_of_vehicle:{
        type:String,
        required:true,
    },
    vehicle_no:{
        type:String,
        required:true
    },
    vehicle_color:{
        type:String,
        required:true
    },
    vehicle_model:{
        type:String,
        required:true
    },
    fueltype:{
        type:String,
        required:true
    }
},{timestamps:true})
export const Vehicle=mongoose.model("Vehicle",vehicleSchema)