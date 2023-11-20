import bcrypt from 'bcryptjs'

const users = [
 {
  name:"Youssef Farhat",
  email:"admin@email.com",
  password:bcrypt.hashSync("123456",10),
  isAdmin:true
},
{
 name:"hicham",
 email:"user@email.com",
 password:bcrypt.hashSync("123456",10),
 isAdmin:false
}

]


export default users