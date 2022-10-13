module.exports = {
    index: async(req, res) => {
        try{
            res.render('index', {
                name: req.session.user.name,
                title: 'Store GG | Home'
            })
            
        }catch (err){
            console.log(err)
        }
    }
}