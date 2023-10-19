import User from '../models/User.js'
import asyncHandler from '../middleware/asyncHandler.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// Auth User
// POST api/users/login
const authUser = asyncHandler(async (req ,res ,next)=>{
    const {user_name,password} = req.body;
    console.log(req.body);
    const user = await User.findOne({user_name});
    if(!user){
      
      res.status(401).json({
      status: 401,
      message: "Invalid credentials"
    });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(user && passwordMatch){
     req.user = user;
     const token = jwt.sign({userID: user._id},process.env.JWT_SECRET,{
      expiresIn: '7d'
     })

     const refreshToken = jwt.sign({ userID: user._id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '30d',
    });

     user.last_login = Date.now();

     res.status(200).json({
       "status": 200,
       "message": "login success",
       "user": {
         "firstName": user.first_name,
         "lastName": user.last_name,
         "email": user.email,
         "userName": user.user_name,
         "role": user.role,
         "creationDate": user.creation_date,
         "lastLogin": user.last_login,
         "lastUpdate": user.last_Update,
         "active": true
       }})
      }
     
    //  },{
    //   access_token: token,
    //   token_type: 'bearer',
    //   expires_in: '7d', 
    //   refresh_token: refreshToken,
    // })
   
   else{
     res.status(401).json({
      "status": 401,
      "message": "invalid credentials"
    })
    }
})

// Add new users
const registerUser = asyncHandler (async (req,res,next) => {
 const {role,user_name,first_name,last_name,email,password} = req.body;
  const userExist = await User.findOne({user_name})
  if(userExist){
   res.status(400)
   throw new Error('user already exist')
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user =  await User.create({
   first_name,
   last_name,
   user_name,
   email,
   password:hashedPassword,
   creation_date: Date.now(),
   last_update: Date.now(),
   active:true
   })
   await user.save()
   res.status(201).json({
    "status": 201,
    "message": "user created successfully"
  });
 })

// get all users
    const getAllUsers = asyncHandler (async (req,res,next) => {
    const {page = 1,sort} = req.query;
    const limit = 10;

    const users = await User.find()
    .select("-password")
    .sort({ created_at: sort === 'DESC' ? -1 : 1 })
    .limit(10)
    .skip((page - 1) * limit)

    res.status(200).json({
     "status": 200,
     "data": [...users],
    })
})


//get user by id 
const getUserById = asyncHandler(async (req,res,next) =>{
   const id = req.params.id;

   const user = await User.findById(id).select("-password")

   if (!user) {
    return res.status(404).json({  
     "message": "user not found"
    });
  }
   
   res.status(200).json({
    "status": 200,
    data: user
   })
})


// search for users 

const searchForUser = asyncHandler(async (req,res,next) => {
 const { query, page=1, sort } = req.query;
 const limit = 10;
 const skip = (page - 1) * limit;

 // Use the $text operator for text search
 const users = await User.find(
   { $text: { $search: query } },
   { score: { $meta: 'textScore' } }
 )
  .select("-password")
   .sort({ score: { $meta: 'textScore' } })
   .skip(skip)
   .limit(limit);

  res.status(200).json({
   status:200,
   data:users
  })
})

// update user's data
const updateUserDataById = asyncHandler (async (req,res,next) => {
     const id = req.params.id;
     const {first_name,last_name,email,role,active} = req.body;
    
     // check if first name , last name , email are unique
     const existingUser = await User.findOne({
       $or: [{ first_name,last_name,email, }],
       _id: { $ne: id }, // Exclude the current user from the check
     });

     if (existingUser) {
       return res.status(400).json({ message: 'firstname,lastname,email already in use' });
     }
     const updatedUser = await User.findByIdAndUpdate(id, {first_name,last_name,email,role,active}, { new: true });
      
     if (!updatedUser) {
       return res.status(404).json({ message: 'User not found' });
     }


     updatedUser.last_update = new Date();
     
     res.status(200).json({
      "status": 200,
      "message": "user updated successfully"
    });
})


// delete user

const deleteUserById = asyncHandler (async (req,res,next) => {
 const id = req.params.id;

 const user = await User.findById(id)

     if (!user) {
      return res.status(404).json({
       "status": 404,
       "message": "invalid user id"
     });
     }
   req.user = user;
   res.status(200).json(
    {
     "status": 200,
     "message": "user deleted successfully"
   })


})

export {
 authUser,
 registerUser,
 getAllUsers,
 getUserById,
 searchForUser,
 updateUserDataById,
 deleteUserById
}





