import { useEffect, useState } from "react"

export const useFetch = (url) => {

const [data, setData] = useState(null)

useEffect( ()=> {
    fetch(url)
    .then(res => {
    if(res.ok){ return res.json()
    }})
    .then(data => {setData(data)})
}, [url])

return {data}
}
