import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'


const ProductDisplay = (props) => {
    const {product} =   props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productDisplay-img'>
                <img src={product.image} className = "productDisplay-main-img" alt="" />
            </div>
        </div>
        

        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">
                    ₹{product.old_price}
                </div>
                <div className="productDisplay-right-price-new">
                    ₹{product.new_price}
                </div>
            </div>
            <div className="productDisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur voluptate, ullam nulla error nesciunt. Repudiandae, iusto architecto harum ex aspernatur quaerat officiis labore unde inventore cupiditate molestiae illum consequatur!
            </div>
            <div className="productDisplay-right-size">
                <h1>Select Size</h1> 
                <div className="productDisplay-right-sizes">
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Large</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className='productDisplay-right-category'><span>Category : </span> Women, T-Shirt, Crop-Top</p>
                <p className='productDisplay-right-category'><span>Tags : </span> Moder, Latest</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay