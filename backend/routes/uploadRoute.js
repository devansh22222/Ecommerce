const express = require('express');
const uploadRouter = express.Router();
const upload = require('../config/multerconfig')
const  uploadImage  = require('../controllers/uploadController');

uploadRouter.post('/upload', upload.single('product'), uploadImage);

module.exports = uploadRouter;
