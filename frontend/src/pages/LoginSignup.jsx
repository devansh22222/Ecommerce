import { useState } from "react"
import "./CSS/LoginSignup.css"

export default function LoginSignup(){
    const [state, setState] = useState("Login")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async()=>{
        console.log(formData)
        let responseData;
        await fetch('http://localhost:3000/login', {
            method : "POST",
            headers: {
                Accept: 'application/form-data',
                'Content-Type' : 'application/json' 
            },
            body:JSON.stringify(formData),
        }).then((res)=>res.json()).then((data)=>responseData = data)

        if(responseData.success){
            localStorage.setItem("token", responseData.token);
            window.location.replace("/")
        }
        else{
            alert("Wrong Password or Email")
        }

    }
    const signup = async()=>{
        console.log(formData)
        let responseData;
        await fetch('http://localhost:3000/register', {
            method : "POST",
            headers: {
                Accept: 'application/form-data',
                'Content-Type' : 'application/json' 
            },
            body:JSON.stringify(formData),
        }).then((res)=>res.json()).then((data)=>responseData = data)

        if(responseData.success){
            localStorage.setItem("token", responseData.token);
            window.location.replace("/")
        }
        else{
            alert("User Already Exists")
        }
    }
    return(
        <div className="loginSignup">
            <div className="loginSignup-container">
                <h1>{state}</h1>
                <div className="loginSignup-fields">
                    {state === "Sign Up" ? <input type="text" placeholder="Your Name" name="name"  value={formData.name} onChange={changeHandler}/> : <></>}
                    <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={changeHandler}/>
                    <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
                    <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>

                    {state === "Sign Up" ? 
                    <p className="loginSignup-login">
                        Already have an account? <span onClick={()=>setState("Login")}>Login here</span>
                    </p> : 
                    <p className="loginSignup-login">
                        Create an account? <span onClick={()=>setState("Sign Up")}>Click here</span>
                    </p>
                    }
                    
                    <div className="loginSignup-agree">
                        <input type="checkbox" name="" id="" />
                        <p>By continuing, I agree to the terms and privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}