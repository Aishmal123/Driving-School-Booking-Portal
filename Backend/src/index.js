import express from 'express'
import connectionDb from '../Config/db.js'
import dotenv from 'dotenv'
dotenv.config()
connectionDb()
const app=express()
app.get('/',(req,res)=>{
    res.send('hello driving school is working')
})
const port=process.env.PORT ||5000
app.listen(port,()=>{
    console.log(`your server is running on port ${port}`)
})
export default app