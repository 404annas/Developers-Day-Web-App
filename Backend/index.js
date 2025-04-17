import express from 'express'
const app=express()
import { getallusers } from './logic/userlogic.js';
import connectdb from './db.js'
import cors from 'cors';
import Contact from './model/usermodel.js';

connectdb()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/contact', async (req, res) => {
    const { email, subject, message } = req.body;
  
    try {
      const newContact = new Contact({
        email,
        subject,
        message,
      });
  
      await newContact.save();
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving message', error: error.message });
    }
  });
  

app.get('/clients', async (req, res) => {
    try {
        const clients = getallusers();  // Fetch all client data
        res.json(clients);  // Send the data as JSON response
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    });

app.listen(3000,()=>{
    console.log(`Server is running at port 3000`)
})