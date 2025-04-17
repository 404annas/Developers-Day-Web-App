//For DB connection
import mongoose from 'mongoose'

const connectdb = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/devdayDB')
        console.log("connected to Mongo")
    }catch(err){
        console.log("Mongo Connection Error:",err)
        process.exit(1)
    }
}
export default connectdb;