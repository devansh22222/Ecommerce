const User = require('../model/userSchema');

const cartController = async (req,res)=>{
    try {
        // console.log("Added", req.body.itemId)
        let userData = await User.findOne({_id:req.user})
        userData.cartData[req.body.itemId] = (userData.cartData[req.body.itemId] || 0) + 1;
        await User.findOneAndUpdate({_id:req.user},{cartData:userData.cartData})

        res.json({
        success: true,
        message: "Item added to cart",
        cartData : userData.cartData
    })

    } catch (error) {
        res.status(500).json({success:false, message :error.message})
    }

    console.log(req.body,req.user)
    
}  

const removeCart = async (req,res)=>{
    try {
        // console.log("Removed", req.body.itemId)
        let userData = await User.findOne({_id:req.user})
        if(userData.cartData[req.body.itemId]>0){
            userData.cartData[req.body.itemId] = (userData.cartData[req.body.itemId] || 0) - 1;
        }
        
        await User.findOneAndUpdate({_id:req.user},{cartData:userData.cartData})

        res.json({
        success: true,
        message: "Item removed from cart",
        cartData : userData.cartData
    })

    } catch (error) {
        res.status(500).json({success:false, message :error.message})
    }
}


const getCart = async (req,res)=>{
    try {
        let userData = await User.findOne({_id:req.user});
        res.json({
            success: true,
            cartData: userData.cartData
        })
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
    

}

module.exports = {cartController, removeCart, getCart};