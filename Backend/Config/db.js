import mongoose from 'mongoose'
const connectionDb=async()=>{
   try {
     const connec=await mongoose.connect(process.env.MONGO_URI)
    console.log("your database is connected successfully ")
   } catch (error) {
    console.log("your database is not connected")
   }
}
export default connectionDb