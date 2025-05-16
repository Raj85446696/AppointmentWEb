const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/submitForm', {
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});


const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    doctor: String,
    date: String,
    time: String,
    age: Number,
    gender: String,
    disease: String,
    govtId: Object
});

const SignUpSchema = new mongoose.Schema({
    name:String , 
    email:String, 
    password:String, 
    role:String
})

const FormData = mongoose.model('FormData', FormDataSchema);
const SignUpData = mongoose.model('SignUpData',SignUpSchema);

app.get('/login',(req,res)=>{
    res.send('data');
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await SignUpData.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // ✅ Plain text password check (TEMPORARY)
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/submitForm', async(req, res) => {
    try {
        const data = req.body;
        const newForm = new FormData(data);
        await newForm.save();
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving form data' });
    }
});

app.post('/signup', async(req, res) => {
    try {
        const data = req.body;
        const newForm = new SignUpData(data);
        await newForm.save();
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving form data' });
    }
});

app.listen(PORT, () => {
    console.log(`Your Server is Running on PORT ${PORT}`)
});