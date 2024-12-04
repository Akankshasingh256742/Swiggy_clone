import React, { useState } from "react";
import Nestedcategories from "./Nestedcategories";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";

function Rescategory({ category,show ,setshowindex}) {
  const [shownesindex,setshownesindex]=useState(null)
  console.log(category);
  function handelclick(){
     setshowindex()
  }

  const dispatch = useDispatch()

  const handleadditem = (card)=>{
        dispatch(additem(card))
  }

  return (
    <div>
      {category["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
        <div>
          <h3 style={{color:'red'}}>{category.title}</h3>
          
           
          <div>
            {category.categories.map((item,index) => {
              return (
                <Nestedcategories  category={item} 
                show={shownesindex==index?true:false} 
                setshownesindex={()=> {shownesindex==index?setshownesindex(null):setshownesindex(index)}}
                />
              );
            })}
          </div>
            
          
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28vw",
              paddingBlock: "20px",
            }}
          >
            <h3 style={{width:'30vw'}}>{category.title}</h3>
            <img
              style={{ height: "20px", width: "20px" }}
              src="https://cdn-icons-png.flaticon.com/512/44/44591.png"
              alt=""
              onClick={()=> handelclick()}
            />
          </div>
          {show ?
          <div>
            {category.itemCards.map((card) => {
              return (
                <div>
                  <hr
                    style={{
                      marginBottom: "10px",
                      border: "1px solid rgba(2, 6, 12, 0.05)",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "170px",
                      paddingBlock: "30px",
                    }}
                  >
                    <div style={{ width: "40vw" }}>
                      <h4 style={{ paddingBottom: "10px" }}>
                        {card.card.info.name}
                      </h4>
                      <p style={{ paddingBottom: "10px" }}>
                        ₹{card.card.info.price / 100}
                      </p>
                      <p>{card.card.info.description}</p>
                    </div>
                    <div>
                      <img
                        style={{ width: "100px", height: "100px" }}
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.card.info.imageId}`}
                        alt=""
                      />
                      <button onClick={()=> handleadditem(card)} style={{paddingBlock:'5px',paddingInline:'20px', marginLeft:'15px',color:'white',backgroundColor:'black'}}>Add</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          :<div></div>}
          <hr
            style={{
              marginBottom: "10px",
              border: "2px solid rgba(4, 10, 12, 0.10)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Rescategory;
