const mongoose = require('mongoose')
let bankSchema = mongoose.Schema({
    name : {
        type : String,
        require: [true, 'Nama pemilik harus diisi']
    },
    namebank : {
        type : String,
        require : [true, 'Nama bank harus diisi']
    },
    norekening : {
        type : Number,
        require : [true, 'Nomor rekening harus diisi']
    }

})

module.exports = mongoose.model('BankData', bankSchema)