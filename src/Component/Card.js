import React, { useEffect, useState } from 'react'

import img from '../Component/image 1.png'

const Card = (newdata) => {

      
      const currDate=new Date()
      
      
      
     
  return (
    <div>

<ul className="collection">
   
   {
      

      
      newdata.data.map((item)=>{
        
      // console.log(item.date)
      if(((item.state==newdata.state) && (newdata.ride=='nearest')) || ((item.state==newdata.state) && (newdata.ride=='past' && item.date<currDate.toLocaleString()))
      ||((item.state==newdata.state) && (newdata.ride=='upcomming' && item.date>currDate.toLocaleString()))) 
{
       
    
         return(
            
        <div className='cards'>
                   <div className='collection-item card  ' style={{display:"flex",flexDirection:"row"}}>
         
         <div  className="img-prop">
         <img src={img} />
         </div>
         <div className='detail'>
        
 
        
         <p className='text' > Ride id: {item.id} </p> 
         <p className='text' > Origin station: {item.origin_station_code} </p> 
         <p className='text'  > station_path: [ {
         
         
         item.station_path.toString()}]</p> 
         
         
         <p className='text' > Date: {item.date} </p> 
         <p className='text' >
             
             
              Distance: {
             
             item.station_path.map((res)=>{
                 
              
                    if(res<newdata.dis+10 && res> newdata.dis)
                 {

                    
                    return (res-newdata.dis)
                        
                   
                 }
                
                 
                  
                
               
             })
           
         } 
       
         
       
         </p> 
         
        
       
         </div>
         <div className='text2' style={{display:"flex",flexDirection:"row"}}>
            <p style={{marginRight:"142px"}}>
                {item.city}
            </p>
            <p >
                {item.state}
            </p>
         </div>
 
     </div>

             </div>
          
         )
    }
})

   }



  </ul>
    </div>
  )
}

export default Card