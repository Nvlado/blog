import BlogList from "./BlogList"
import { useFetch } from "./useFetch"

export default function Home(){

const {data} = useFetch("http://localhost:8000/blogs/")

return (
        <>
        {data && <BlogList title="All articles" data={data} / >} 
        </>
    )
}