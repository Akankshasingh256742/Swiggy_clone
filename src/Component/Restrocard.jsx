import React from 'react'

function Restrocard({component}) {
  return (
    <div style={{
        width: '200px',
        border: '1px solid white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginLeft: '30px',
        marginTop: '30px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
  
      }}>
        <div className="image">
          <img 
            style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${component.cloudinaryImageId}`} 
            alt={component.name} 
          />
        </div>
        <div style={{
          padding: '10px',
          maxHeight: '300px', /* Adjust based on your needs */
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
           <div style={{display:'flex',gap:'10px'}}>
            <div>
              <img style={{height:'20px',width:'20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZZDDZdrwOTUL--HgKdSA_22ZgBciqwXhPg&s" alt="" />
           </div> 
           <div>
            <span>{component.avgRatingString} • {component.sla.slaString}</span>
      
           </div>
          </div>
          <p style={{
            margin: '5px 0',
            fontWeight: 'bold',
            whiteSpace: 'normal', /* Allow text to wrap */
          }}>{component.name}</p>
          <p style={{
            margin: '5px 0',
            whiteSpace: 'normal', /* Allow text to wrap */
            overflowWrap: 'break-word',/* Handle long words properly */
          }}>{component.cuisines.join(', ')}</p>
        </div>
       
      </div>
  )
}

export default Restrocard