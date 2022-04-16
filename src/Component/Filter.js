import React, { useEffect, useState } from 'react'
import Card from './Card'


const Filter = ({state,city}) => {
    const [data,setData]=useState([])
    
    const[newstate,setState]=useState("")

    const[newcity,setCity]=useState("")
    useEffect(()=>{
        fetch('https://assessment.api.vweb.app/rides',{
            method:"GET",
            headers:{
                     "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then((data)=>{
            
            setData(data)
        })
      
      },[])


     const stateHandler=()=>{
         
     }
 
    
  return (
    <div>



<div className="dropdown" style={{marginLeft:"1271px"}}>
  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul className="dropdown-menu list" aria-labelledby="dropdownMenuLink" >
    { <li> 
          
        
          {
             
               <select className="form-select form-select-sm mb-3 opt" aria-label=".form-select-lg example" style={{width:"150px",margin:"auto",marginTop:"70px"}} >
               <option selected>State</option>
                      {
                           data.map((item)=>{
                              return <option className='opt-txt'><a className="dropdown-item" onClick={()=>{
                                  setState(item.state)
                              }}>{item.state}</a></option>
                           })
                   
                           
                       }
              
             </select>
      
              
          }
          </li>
    }

   
    { <li > 
          
        
          {
               <select className="form-select form-select-lg mb-3 opt " aria-label=".form-select-sm example opt" style={{width:"150px",margin:"auto"}} >
               <option selected >City</option>
                      {
                           data.map((item)=>{
                              return <option className='opt-txt'><a className="dropdown-item " href="#hhh">{item.city}</a></option>
                           })
                   
                           
                       }
              
             </select>
      
              
          }
          </li>
    }
  </ul>
</div>


    </div>
    
  )
}

export default Filter