module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, price, img} = req.body
        
        dbInstance.create_product ([name, price, img])
        .then(() => res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({errorMessage: 'something is busted'})
            console.log(err)
        })
    },

    getAll: (req, res, next) =>{
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'something is busted'})
            console.log
        })
    }






}