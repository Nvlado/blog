import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "./useFetch"

export default function BlogDetails(){

const { id } = useParams()
const {data} = useFetch("http://localhost:8000/blogs/" + id)  
const navigate = useNavigate()

function handleClick(){
    fetch("http://localhost:8000/blogs/" + data.id, {method: 'DELETE'})
    .then(()=> {navigate("/home")})
}

return (
    <>
        {data && <div className="blog-details">
        <h1>{data.input.title}</h1>
        <p>Written by {data.input.firstName} {data.input.lastName}</p>
        <p>{data.input.dateTime}</p>
        <p>{data.input.text}</p>
        <button onClick={handleClick}>Touch me</button>
        </div>}
    </>   
    
    
    )
}