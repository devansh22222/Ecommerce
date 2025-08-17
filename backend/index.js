require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const connectDB = require('./config/mongodb');
connectDB();

const uploadRouter = require('./routes/uploadRoute');
const productRouter = require('./routes/productRoute');
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');



app.use(express.json());
app.use(cors());
app.use(cookieParser())

// mongoose.connect('')

app.listen(port,()=>{
    console.log("Server Started")
})

app.get("/", (req,res)=>{
    res.send("API Working Ecommerce")
})

app.use('/images',express.static(path.join(__dirname, 'upload/images')))

app.use('/', uploadRouter)
app.use('/', productRouter)
app.use('/', authRouter)
app.use('/', userRouter)





