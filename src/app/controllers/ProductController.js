const Category = require('../models/Category')
const Product = require('../models/Product')
const { price, formatPrice } = require('../../lib/utils')

module.exports = {
    create(req,res){
        
        Category.all()
        .then(function(results){

            const categories = results.rows

            return res.render("products/create", { categories })

        }).catch(function(err){
            throw new Error(err)
        })
        
        
    },
    async post(req, res){

       let results = await Product.create(req.body)
       const product = results.rows[0]
       console.log(product)
       results = await Category.all()
       const categories = results.rows

       return res.redirect(`products/${product.id}/edit`)
    },
    async edit(req, res){
        let results = await Product.find(req.params.id)
        const product = results.rows[0]
        if (!product) return res.send("Product not Found!")
        
        product.old_price = formatPrice(product.old_price)
        product.price = formatPrice(product.price)
        
        results = await Category.all()
        const categories = results.rows

        return res.render("products/edit", { product, categories })
 
    },
    async put(req, res){
        
        req.body.price = price(req.body.price)
        if(req.body.old_price != req.body.price) {
            const oldProduct = await Product.find(req.body.id)

            req.body.old_price = oldProduct.rows[0].price
        }
        await Product.update(req.body)

        return res.redirect(`/products/${req.body.id}/edit`)
    },
    async delete(req, res){
        await Product.delete(req.body.id)

        return res.redirect("products/create")
    }
}