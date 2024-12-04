import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import Rescategory from './Rescategory';

function Restromenu() {
  const [showindex, setshowindex] = useState(null)
  const { resId } = useParams();
  const cleanedResId = resId.replace(':', '');
   console.log(cleanedResId);

   const resInfo = useFetch(cleanedResId)
   console.log(resInfo)
  

  if (resInfo === null) return <div></div>
  
  const {
    id,
    name,
    city,
    cloudinaryImageId ,
    locality ,
    areaName ,
    costForTwo,
    sla,
    costForTwoMessage ,
    cuisines ,
    feeDetails,
    avgRating ,
  } = resInfo?.cards?.[2]?.card?.card?.info ;
  
  const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  const { title } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.['card']?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||  c.card?.['card']?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
  )

  console.log(categories)
 
  return (
    <div style={{marginInline:'100px',marginTop:'30px',paddingLeft:'100px',width:'70vw'}}>
     <h1 style={{fontFamily:'sans-serif',}}>{name}</h1> 
     <p style={{marginBlock:'10px',fontSize:'1.2rem',color:'rgba(0 0 0 0.2)'}}>Order Online</p>
     <hr style={{marginBottom:'10px', border: '1px solid rgba(2, 6, 12, 0.05)'}}/>
     <div style={{boxShadow:'2px 2px 8px rgba(0, 0, 0, 0.5)', borderRadius:'10px', marginBlock:'10px',padding:'10px'}}>
      <p style={{display:'flex',alignItems:'center',gap:'5px',marginBottom:'5px'}}><img style={{width:'20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQLJzRnPfrsRz-qxnvFuHKPKLjy7OEQs-zA&s"/> {avgRating} • {costForTwo}</p>
      <p style={{marginBottom:'5px'}}>{cuisines}</p>
      <p style={{marginBottom:'5px'}}>{locality} <span>{areaName}</span></p>
      <p style={{marginBottom:'10px'}}>{sla.slaString}</p>
      <p>{costForTwoMessage}</p>
      <hr style={{marginBottom:'10px', border: '1px solid rgba(2, 6, 12, 0.05)'}}/>
     </div>
      <div>
      {categories.map((category,index)=>(
           
           <Rescategory  category={category.card?.card} 
           show={showindex == index ? true : false}
           setshowindex = {() => {showindex==index?setshowindex(null):setshowindex(index)}}
           />
           
      ))}
      </div>
    </div>
  )
}


export default Restromenu