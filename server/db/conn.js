const mongoose=require('mongoose');

const DB=process.env.DATABASE
mongoose.connect(DB, 
    {useUnifiedTopology:true, useNewUrlParser:true,
         useCreateIndex:true, useFindAndModify:false})
    .then(()=>{
    console.log('connection established');
}).catch(err=>{
    console.log('connection failed',err);
})