import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    secondname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: [16, "password should not be greater then 16 characters"],
      minlength: [4, "password should not be greater then 16 characters"],
    },
    phone: {
      type: String,
      required: true,
    },
    healthcertificate: {
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
    }
  },
  { timestamps: true },
);
export const User = mongoose.model("User", userSchema);
