const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
 name:{
     type:String
 },
 email:{
     type:String
 },
 phone:{
     type:String
 },
 work:{
     type:String
 },
 password:{
     type:String
 },
 cpassword:{
     type:String
 },
 date:{
    type:String
 }
})

module.exports=mongoose.model('USER', UserSchema);
