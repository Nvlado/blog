import { Link } from "react-router-dom"
export default function BlogList({data, title}){
   return (  
      
      <div className="home"> 
      <h1>{title}</h1>        
      {data.map( (blog, index) => (
      <div key={index}>
      <Link to={`/blogs/${blog.id}`}>
      <h2>{blog.input.title}</h2>
      <p>Written by {blog.input.firstName} {blog.input.lastName}</p>
      <p>{blog.input.dateTime}</p>
      </Link>
      </div>
      ))}
      </div>
      );
  }




