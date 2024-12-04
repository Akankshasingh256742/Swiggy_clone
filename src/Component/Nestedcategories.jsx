import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";

function Nestedcategories({ category,show,setshownesindex }) {
   
  const dispatch = useDispatch()

  const handleadditem = (card)=>{
        dispatch(additem(card))
  }

  function handelclick() {
    setshownesindex();
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28vw",
          paddingBlock: "20px",
        }}
      >
        <div style={{ width: "30vw",fontSize:'0.9rem',fontWeight:'bold' }}>
          <p>{category.title}</p>
        </div>

        <img
          style={{ height: "20px", width: "20px" }}
          src="https://cdn-icons-png.flaticon.com/512/44/44591.png"
          alt=""
          onClick={() => handelclick()}
        />
      </div>
      {show ? (
        <div>
          {category.itemCards.map((item) => (
            <div key={item.card.info.id}>
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
                    {item.card.info.name}
                  </h4>
                  <p style={{ paddingBottom: "10px" }}>
                    ₹{item.card.info.price / 100}
                  </p>
                  <p>{item.card.info.description}</p>
                </div>
                <div>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                    alt=""
                  />
                   <button onClick={()=> handleadditem(item)} style={{paddingBlock:'5px',paddingInline:'20px', marginLeft:'15px',color:'white',backgroundColor:'black'}}>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <hr
            style={{
              marginBottom: "10px",
              border: "1px solid rgba(4, 10, 12, 0.10)",
            }}
          />
    </div>
  );
}

export default Nestedcategories;
