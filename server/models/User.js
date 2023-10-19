import { mongoose } from "mongoose";
// import { isEmail } from 'validator';
 

const users = new mongoose.Schema({
 first_name: { type: String, required: true,trim:true,unique:true},
 last_name: { type: String, required: true,trim:true,unique:true},
 user_name:{ type: String, required: true,trim:true,unique:true},
 email: { type: String, required: true,unique:true},
 role:{ type: String},
 password: { type: String,required: true },
 creation_date: {
  type: Date,
  default: Date.now
   },
 last_login: {
     type: Date
   },
  last_update: {
     type: Date
   },
 active:{type:Boolean,default:true},

},{timestamps: true})


const User = mongoose.model('User', users);

export default User