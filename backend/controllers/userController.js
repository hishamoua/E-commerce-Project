import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// Auth user & get token 
// POST /api/users/login
const authUser = asyncHandler(async (req,res) => {
 const { email, password } = req.body;

 const user = await User.findOne({ email });

 if(user && (await user.matchPassword(password))) {
   generateToken(res,user._id);
   res.status(200).json({
    _id:user._id,
    name: user.name,
    email:user.email,
    isAdmin: user.isAdmin
   });

 }
 else{
  res.status(401);
  throw new Error('Invalid email or password')
 }
 
});

// REGISTER USER
// POST /api/users
const registerUser = asyncHandler(async (req,res)=>{
   const {name,email,password} = req.body;

   const userExists = await User.findOne({ email });

   if (userExists) {
    res.status(400)
    throw new Error('User already exists');
   }

   const user = await User.create({
    name,
    email,
    password,
   });

   if (user) {
    generateToken(res,user._id);

    res.status(201).json({
     _id: user._id,
     name: user.name,
     email: user.email,
     isAdmin: user.isAdmin,
    })
   }
   else{
    res.status(401);
    throw new Error('Invalid email or password');
   }

});

// Logout user / clear cookie
// POST /api/users/logout
const logoutUser = asyncHandler(async (req,res)=>{
 res.cookie('jwt','',{
  httpOnly:true,
  expires: new Date(0)
 });

 res.status(200).json({
  message: 'Logged out successfully'
 });
});

// Get user profile
// GET api/users/profile
const getUserProfile = asyncHandler(async (req,res) => {
 const user = await User.findById(req.user._id);

 if(user) {
  res.status(200).json({
   _id: user._id,
   name: user.name,
   email: user.email,
   isAdmin: user.isAdmin,
  });
 }
 else{
  res.status(404);
  throw new Error('User not found');
 }
})

// update user profile
// GET PUT api/users/profile
const updateUserProfile = asyncHandler(async (req,res) => {
 const user = await User.findById(req.user._id);

 if(user){
  
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
   
  if(req.body.password){
   user.password = req.body.password;
  }

  const updatedUser = await user.save();

 res.status(200).json({
   _id: updatedUser._id,
   name: updatedUser.name,
   email: updatedUser.email,
   isAdmin: updatedUser.isAdmin,
  })
 }

 else{
  res.status(404);
  throw new Error('User not found');
 }


});

// Get users
// GET GET /api/users
// Private/Admin
const getUsers = asyncHandler(async (req,res) => {
 res.send('get user')
});


// Get users by ID
// GET GET /api/users/:id
// Private/Admin
const getUserById = asyncHandler(async (req,res) => {
 res.send('get user by id')
});

// delete users
// DELETE /api/users/"id"
// Private/Admin

const deleteUser = asyncHandler(async(req,res)=>{
 res.send('get users')
})


// update users
// PUT /api/users/:id
// Private/Admin
const updateUser = asyncHandler(async(req,res)=>{
 res.send('update user')
})


export {
 authUser,
 registerUser,
 logoutUser,
 getUserProfile,
 updateUserProfile,
 getUsers,deleteUser,
 getUserById,updateUser,
};










