import { AddCircleOutlineOutlined } from '@mui/icons-material'
import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { checkin,categories } from './source/datas';
const Left = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div className='left'>
       
        <div style={{  display: 'flex', gap: '10px', padding: '1px', margin: '10px',marginTop:'10px', marginLeft:'20px',fontSize:'large' }}>

        <AddCircleOutlineOutlined
        style={{
          fontSize: "35px", // Make the icon larger
          color: "#03699f", // Use the secondary color
          stroke: "var(--mui-palette-secondary-main)", // Border color
          strokeWidth: 2, // Thicker borders
        }}
      />
        <span className='new'>New note</span>
</div>
{checkin?.map((item,index)=>{
  return(
    <div key={index} style={{ display: 'flex', gap: '10px', padding: '1px',margin:'25px', marginLeft:'20px',fontSize:'large' }}>

   {item?.icon}
    <span className='newsub'>{item.name}</span>
</div>
  )
})}
<div >
  
  <div  style={{  display: 'flex', gap: '10px', padding: '1px', margin: '10px', marginLeft:'20px',fontSize:'large' }}>
<span className='new'>Categories</span>
<AddOutlinedIcon
style={{
  fontSize: "30px", // Make the icon larger
  color: "#BBB", 
  marginLeft:'200px',
  marginTop:'4px',
  stroke: "var(--mui-palette-secondary-main)", // Border color
  strokeWidth: 2, // Thicker borders
}}
/>
</div>
  {categories?.map((item,index)=>{
  return(
    <div key={index} style={{ display: 'flex', gap: '10px', padding: '1px',margin:'25px', marginLeft:'20px',fontSize:'large' }}>

   {item?.icon}
    <span className='newsub'>{item.name}</span>
</div>
  )
})}
</div>
        </div>
        
  )
}

export default Left