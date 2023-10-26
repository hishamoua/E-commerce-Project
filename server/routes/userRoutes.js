import {authUser,registerUser,
 getAllUsers,getUserById,
 searchForUser,updateUserDataById,deleteUserById} from '../controllers/userController.js'

// import isAdmin from '../middleware/isAdmin.js';
// import checkRoles from '../middleware/checkRoles.js';

import express from 'express'
const router = express.Router()

router.post('/login',authUser);
router.post('/users',registerUser)

router.get('/users',getAllUsers)
router.get('/users/:id',getUserById)

router.get('/users',searchForUser)


router.put('/users/:id',updateUserDataById)


router.delete('/users/:id',deleteUserById);


export default router