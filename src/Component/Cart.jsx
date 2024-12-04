import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearcart } from '../utils/cartslice'

function Cart() {
     const itemselector = useSelector((store)=> store.cart.items)
     const item = useSelector((store)=> store.cart.items)
     const dispatch = useDispatch()
     const handleclearitem = ()=>{
           dispatch(clearcart())
     }
     console.log(itemselector)
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{padding:'30px'}}>
        <h1 style={{paddingLeft:'80px',paddingBottom:'20px',}}>Cart</h1>
        <button onClick={handleclearitem} style={{paddingBlock:'5px',marginLeft:'70px',paddingInline:'20px',marginBottom:'15px', color:'white',backgroundColor:'black'}}>Clear Cart</button>
        {item.length == 0 && <div>Your Cart is empty!! Select some items</div>}
        </div>
       <div>
        
       {itemselector.map((card) => {
              return (
                <div>
                  
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
                    </div>
                  </div>
                  <hr
                    style={{
                      marginBottom: "10px",
                      border: "1px solid rgba(2, 6, 12, 0.05)",
                    }}
                  />
                </div>
              );
            })}
          
          
    </div>
    </div>
  )
}

export default Cart