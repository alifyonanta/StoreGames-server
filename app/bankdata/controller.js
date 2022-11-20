const Bankdata = require('./model')
module.exports = {
    index: async(req, res) => {
        try{
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")

            const alert = { message: alertMessage, status: alertStatus}
            const bankdata = await Bankdata.find()

            res.render('admin/bankdata/view_bankdata',{
                bankdata,
                alert
            })
        }catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bankdata')
        }
    },
    viewCreate : async(req, res) => { 
        try{
            res.render('admin/bankdata/create')
        }catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bankdata')
        }
    },
    actionCreate : async(req, res)=>{
        try{
            const { name, namebank, norekening } = req.body
            let bankdatadata = await Bankdata({name, namebank, norekening})
            await bankdatadata.save();

            req.flash('alertMessage', "Bankdata berhasil ditambahkan")
            req.flash('alertStatus', "success")
            res.redirect('/bankdata')
        }catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bankdata')
        }
    },

    viewEdit : async(req, res)=>{
        try{
            const { id } = req.params
            const bankdata = await Bankdata.findOne({_id : id})
            res.render('admin/bankdata/edit',{
                bankdata
            })

        }catch(err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bankdata')
        }
    },
    actionEdit : async(req, res)=>{
        try{
            const { id } = req.params
            const { coinName, coinQuantity, price } = req.body
            await Bankdata.findOneAndUpdate({
                _id: id
            },{ coinName, coinQuantity, price });

            req.flash('alertMessage', "Bankdata berhasil diubah")
            req.flash('alertStatus', "success")
            res.redirect('/bankdata')
        }catch(err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bankdata')
        }
    },

    actionDelete : async(req, res)=> {
        try{
            const { id } = req.params
            await Bankdata.findByIdAndDelete({
                _id: id
            });

            req.flash('alertMessage', "Bankdata berhasil dihapus")
            req.flash('alertStatus', "success")
            res.redirect('/bankdata')
        }catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bankdata')
        }
     }
}