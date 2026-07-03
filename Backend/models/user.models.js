import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase:true,
      trim:true, 
      index:true
    },
    userName:{
       type: String,
      required: true,
      lowercase:true,
      trim:true, 
      index:true
    },
    secondName: {
      type: String, 
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase:true,
      trim:true, 
    },
    password: {
      type: String,
      required: [true,"password is required"],
      maxlength: [16, "password should not be greater then 16 characters"],
      minlength: [4, "password should not be greater then 16 characters"],
    },
    phone: {
      type: String,
      required: true,
    },
    healthCertificate: {
      type: Image,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "Others"],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
    },
    vehicle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vehicle",
        required:true
    },
    refreshToken:{
      type:String
    },
  },
  { timestamps: true },
);
userSchema.pre("save",async function (next) {
  if(!this.modified("password"))return next()
  this.password=bcrypt.hash(this.password,10)
  next()
})
userSchema.methods.isPasswordCorrect=async function (password) {
 return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
   jwt.sign({
    _id:this._id,
    email:this.email,
    userName :this.userName,
    firstName:this .firstName

   },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }
)
}
userSchema.methods.generateRefreshToken=function(){
   jwt.sign({
    _id:this._id,
   },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  }
)
}
export const User = mongoose.model("User", userSchema);
