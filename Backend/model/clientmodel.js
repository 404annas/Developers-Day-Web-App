import mongoose from "mongoose";
const clientSchema = new mongoose.Schema({
  logo: {
    type: String,  
    required: true
  },
  quote: {
    type: String,
    required: true
  }
});

const Client= mongoose.model('Client', clientSchema);
export default Client