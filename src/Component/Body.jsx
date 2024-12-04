import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import Header from './/Header';
import Restrocard from './Restrocard';
import CardData from './CardData';


function Body() {
  const [restro,setrestro] = useState([]);
  const [filterrestro, setfilterrestro] = useState([]);
 const [searchtext,setsearchtext]=useState('');
  useEffect(()=>{
    fetchdata();
 },[])

  const fetchdata = async() => {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const resdata = await response.json();
    setrestro(resdata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setfilterrestro(resdata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }
  return (
    <div style={{width:'100vw'}}>
       <button style={{marginTop:'20px'}} onClick={()=>{
          const filterdata = restro.filter((restro) => (
            restro.avgRating >= 4.5));
          console.log(filterdata)
          setrestro(filterdata)
       }} >Top Rated Restaurant</button>


       <input type="text" style={{marginLeft:'30px'}} value={searchtext} onChange={(e)=> setsearchtext(e.target.value)}/>
       <button onClick={()=>{
        const filterdata = restro.filter((restro)=>(
             restro.info.name.toLowerCase().includes(searchtext.toLowerCase())
        ))
        setfilterrestro(filterdata)
        }} >Search</button>


       <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
       {filterrestro.map((component,index) =>{
        console.log(component.info.id)
         return <Link key={index} to={`/restaurant/:${component.info.id}`}><Restrocard  component={component.info} /></Link>
       } )}
       </div>
    </div>
  )
}

export default Body