const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

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

const FormData = mongoose.model('FormData', FormDataSchema);

app.get('/', (req, res) => {
    res.send('My Server is Running');
});

app.get('/submitForm', (req, res) => {
    res.send('done');
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

app.listen(PORT, () => {
    console.log(`Your Server is Running on PORT ${PORT}`)
});