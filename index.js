const express = require('express')
const dotenv = require('dotenv').config();
const {connect} = require('./src/utils/database')
const routerSimpson= require('./src/api/character/character.routes');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;



const PORT= process.env.PORT || 8000;
const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

app.listen(PORT,()=> console.log(`listening on: http://localhost:${PORT}`));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/character", routerSimpson)

connect();