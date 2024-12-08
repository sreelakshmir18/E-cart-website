import { useEffect, useState } from "react"

// user defined hooks

const useFetch=(url)=>{
    const [data, setData]=useState("")

    useEffect(()=>{
      fetch(url).then((res)=>{

        res.json().then((arrayData)=>setData(arrayData.carts))
      })
      
    },[url])
    return data
}
export default useFetch