const Product = require('../model/productSchema');

const addProduct = async (req,res)=>{
    const { name, image, category, new_price, old_price } = req.body
    let products = await Product.find({});
    let checkId;

    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        checkId = last_product.id + 1;
    }
    else{
        checkId=1
    }
    
    try {
        const product = new Product({
            id: checkId,
            name: name,
            image: image,
            category: category,
            new_price:new_price,
            old_price:old_price

        });
        // console.log(product)
        await product.save();
        res.status(201).json({success: 1, product})
    } catch (error) {
        console.log("Error while uploading", error)
        res.status(500).json({success: 0, message: error.message})
    }
}



const deleteProduct = async (req,res)=>{
    let {id} = req.params;
    const deletedProduct = await Product.findOneAndDelete({id: Number(id)})

    if(!deletedProduct){
        return res.status(404).json({success: 0, message: "Product not found"});
    }
    else{
        console.log("Product Deleted",deletedProduct)
        res.status(200).json({success: 1, message: "Product deleted Successfully", deletedProduct})
    }
}


const getAllProducts = async (req,res)=>{
    try {
        let products = await Product.find({})
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json({message: "Error fetching Products", error: error.message})
    }
}


const getNewCollection = async( req,res)=>{
    try {
        const products = await Product.find({});
        let newCollection = products.slice(1).slice(-8);
        res.status(200).json(newCollection)
    } catch (error) {
        res.status(500).json({message: "Error fetching Products", error: error.message})
    }
}

const getpopularWomenCloths = async (req,res)=>{
    try {
        let products = await Product.find({category:"women"})
        let popularWomenCloths = products.slice(0,4)
        res.status(200).json(popularWomenCloths)

    } catch (error) {
        res.status(500).json({message: "Error fetching Products", error: error.message})
    }
}




module.exports = {addProduct,deleteProduct,getAllProducts, getNewCollection,getpopularWomenCloths};
