import "./NewCollections.css"
import new_collection from "../Assets/new_collections"
import Item from "../items/Item"
import { useEffect, useState } from "react"

export default function NewCollections(){

    const [new_collection, setNew_Collection] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/newCollections')
        .then((res)=>res.json())
        .then((data)=>setNew_Collection(data))
    },[])

    return(
        <div className="newCollections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
                    
                })}
            </div>
        </div>
    )
}