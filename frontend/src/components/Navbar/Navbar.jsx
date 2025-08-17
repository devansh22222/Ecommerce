import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import dropdown_icon from  "../Assets/dropdown_icon.png"


export default function Navbar(){

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className="navbar">

            <div className="nav-logo">
                <img src={logo} alt="logo" height={"58px"} width={"58px"} />
                <p>KLOTHING</p>
            </div>
            
            <img src={dropdown_icon} alt="" onClick={dropdown_toggle} className="navbar-dropdown"/>

            <ul className="nav-menu" ref={menuRef}>
                <li onClick={()=>{setMenu("shop")}}><Link to={"/"} className="custom-link">Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to={"/men"} className="custom-link">Men</Link> {menu === "men" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to={"/women"} className="custom-link">Women</Link> {menu === "women" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to={'/kids'} className="custom-link">Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
            </ul>
            

            <div className="nav-login-cart">
                {localStorage.getItem('token')? <button onClick={()=>{localStorage.removeItem('token'); window.location.replace('/')}}>Logout</button>:<Link to={"/login"}><button>Login</button></Link>}
                
                <Link to={"/cart"}><img src={cart_icon} alt="cart-logo" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    )
}