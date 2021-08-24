const express =require('express');
const Post = require('./routes/post')
const cors =require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app =express();
const dotenv = require('dotenv')
const slug = require('slug')
dotenv.config();





//Mongodb Conntect

mongoose.connect(process.env.MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(()=>{console.log("Mongo DB Connected")})
.catch((err)=>{console.log(err)})


//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/', Post)



//PORT
const PORT = 8000 || process.env.PORT;
app.listen(PORT, ()=>{

    console.log (`Server is running on Port ${PORT}`)

})



