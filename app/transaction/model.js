const mongoose = require('mongoose')
let TransactionSchema = mongoose.Schema({
    historyVoucherTopup : {
        gameName : { type : String, require : [true, 'Nama game harus diisi']},
        category : { type : String, require : [true, 'Kategori game harus diisi']},
        thumbnail : { type : String },
        coinName : { type : String, require : [true, 'Nama coin harus diisi']},
        coinQuantity : { type : String, require : [true, 'Jumlah coin harus diisi']},
        price : { type : Number}
    },

    historyPayment : {
        name : { type : String, require : [true, 'Nama harus diisi']},
        type : { type : String, require : [true, 'tipe pembayaran harus diisi']},
        bankName : { type : String, require : [true, 'Nama bank harus diisi']},
        noRekening : { type : String, require : [true, 'Nomor rekening harus diisi']},
    },

    name : {
        type : String,
        require : [true, "Nama harus diisi"],
        maxlength : [225,"Panjang nama maximal 225 karakter"],
        minlength : [3, "Panjang nama minimal 3 karakter"]
    },

    accountUser : {
        type : String,
        require : [true, "Nama akun harus diisi"],
        maxlength : [225,"Panjang nama maximal 225 karakter"],
        minlength : [3, "Panjang nama minimal 3 karakter"]
    },

    tax : {
        type : Number,
        default : 0
    },

    value : {
        type : Number,
        default : 0
    },

    status : {
        type : String,
        enum : ['pending', 'success','failed'],
        default : 'pending'
        
    },

    player : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    },

    historyUser : {
        name : { type : String, require : [true, 'Nama harus diisi']},
        phoneNumber : {
            type : Number,
            require : [true, "No hp harus diisi"],
            maxlength : [13,"Panjang no hp maximal 13 karakter"],
            minlength : [9, "Panjang no hp minimal 9 karakter"]
        }
    },

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model('Transaction', TransactionSchema)