import express from 'express'
const app=express()
//import {getallusers,sfv} from .logic/userLogic.js
import connectdb from './db.js'
connectdb()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(3000,()=>{
    console.log(`Server is running at port 3000`)
})