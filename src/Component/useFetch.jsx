import  { useEffect, useState } from 'react'

const useFetch = (cleanedResId) => {
     const [input,setinput] =useState(null)
     
 useEffect(()=>{
    result()
 },[])
 async function result(){
    const result = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${cleanedResId}&catalog_qa=undefined&submitAction=ENTER`)
    const data = await(result.json())
    setinput(data.data)
 }
 
 return input
}

export default useFetch