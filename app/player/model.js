const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const HASH_ROUND = 10

let PlayerSchema = mongoose.Schema({
    email : {
        type : String,
        require: [true, 'Email harus diisi']
    },
    name : {
        type : String,
        require: [true, 'Nama harus diisi'],
        maxlength : [225,"Panjang nama maximal 225 karakter"],
        minlength : [3, "Panjang nama minimal 3 karakter"]
    },
    username : {
        type : String,
        require: [true, 'Username harus diisi'],
        maxlength : [225,"Panjang username maximal 225 karakter"],
        minlength : [3, "Panjang username minimal 3 karakter"]
    },
    password : {
        type : String,
        require: [true, 'Password harus diisi'],
        maxlength : [225,"Panjang password maximal 225 karakter"],

    },
    role : {
        type : String,
        enum : ['admin', 'user'],
        default : 'admin'
    },
    status : {
        type : String,
        enum : ['Y', 'N'],
        default : 'Y'
    },
    avatar : {type: String},
    fileName : {type: String},
    phoneNumber : {
        type : String,
        require: [true, 'Nomor telepon harus diisi'],
        maxlength : [13,"Panjang no hp maximal 13 karakter"],
        minlength : [9, "Panjang no hp minimal 9 karakter"]
    },
    favorite : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    }
}, { timestamps: true })

PlayerSchema.path('email').validate(async function (value){
    try {
        const count = await this.model('Player').countDocouments({email : value})
        return !count;
    } catch (err) {
        throw err
    }
}, attr => `${attr.value} sudah terdaftar`)

PlayerSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, HASH_ROUND)
    next()
})

module.exports = mongoose.model('Player', PlayerSchema)