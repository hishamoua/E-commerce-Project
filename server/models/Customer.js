const mongoose = require('mongoose')
const validator = require('validator')

const customerSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: [true, 'Please add a name']
    },
    last_name: {
        type: String,
        required: [true, 'Please add a last_name']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Email is not valid',}
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlenght: 7,

    },
    creation_date: {
       type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Number,
        default: null, // Initialisez-le à null au moment de la création du client
      },
     valid_account:{
        type: Boolean,
        default: false,
     } ,
     active: {
        type: Boolean,
        default: false,
     }
    },
    
    {
        timestamps: true,
     }
)
module.exports = mongoose.model('Customer', customerSchema)   