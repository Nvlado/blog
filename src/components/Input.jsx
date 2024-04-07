import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Input(){

const today = new Date();
const time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;
const navigate = useNavigate()


const [input, setInput] = useState({firstName: "", lastName: "", title: "", text: "", dateTime: dateTime})
 
function handleChange(inputIdentifier, newValue){
    setInput(prevInput => {
        return {...prevInput, 
        [inputIdentifier]: newValue}
    })
}


function handleClick(event){
        event.preventDefault();
        const blog = {input};
    
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {navigate("/home")})


}

    return (
        <>
        <form className="userInput">
            
            <label>First Name</label>
            <input onChange={(event)=>handleChange('firstName', event.target.value)} type="text" value={input.firstName} required></input>

            <label>Last Name</label>
            <input onChange={(event)=>handleChange('lastName', event.target.value)} type="text" value={input.lastName} required></input>

            <label>Title</label>
            <input onChange={(event)=>handleChange('title', event.target.value)} type="text" value={input.title} required></input>
            
            <label>Text</label>
            <textarea onChange={(event)=>handleChange('text', event.target.value)} value={input.text} required />
            
            <button onClick={handleClick}>Hit me</button>

        </form>
        </>
    )
}