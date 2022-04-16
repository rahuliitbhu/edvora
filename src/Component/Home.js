 import React, { useEffect, useState } from 'react'
import Card from './Card'
import Filter from './Filter'
 
 function Home() {
    

    const[state,setState]=useState("")
    const[ride,setRide]=useState("")
   
    const[city,setCity]=useState("")
    const [data,setData]=useState([])
    const [user,setUser]=useState([])


   





    const fetchUser=()=>{
        fetch('https://assessment.api.vweb.app/user',{
        method:"GET",
        headers:{
                 "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        setUser(data)
    })
    }
  const fetchData=()=>{
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
  }
    useEffect(()=>{
     fetchData()
     fetchUser()
    
    },[])

   
   return (
    
 
<div className="home">

    <div >
    <ul className="tabs tabs-transparent tab-opt mb-6"  style={{height:"30px"}}>


<li className="tab"><a  onClick={()=>{
setRide("nearest")
console.log(ride)
}}>Nearest Rides</a></li>

<li className="tab"><a 
onClick={()=>{
    setRide("upcomming")
    console.log(ride)
    }}

>Upcoming Rides</a></li>


<li className="tab "><a 
onClick={()=>{
    setRide("past")
    console.log(ride)
    }}



>Past Rides</a></li>


</ul>


<div class="btn-group " style={{marginLeft:"1271px"}}>
<i style={{marginLeft:"7px" ,marginTop:"-35px",color:"white"}} class="material-icons">filter_list</i>
<a className='filter' style={{marginLeft:"3px",marginTop:"-32px",fontSize:"18px"}} type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  Filter
</a>
<ul class="dropdown-menu list" data-bs-spy="scroll" aria-labelledby="dropdownMenuClickableInside">
{

        <div style={{margin:"auto",marginTop:"80px",height:"30.5px",width:"160.45px"}}>
          

<button class="btn dropdown-toggle opt " type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  State
</button>
<ul class="dropdown-menu " aria-labelledby="dropdownMenuClickableInside">
   
  <li >{
       data.map((item)=>{
          return( <button className='opt-txt' onClick={()=>{
            setState(item.state)
           
        }}>{item.state}</button>
   )
       
})
}</li>
  
</ul>
            </div>
  

    }
    {
        <div style={{margin:"auto",marginTop:"20px",height:"30.5px",width:"160.45px"}}>

<button class="btn btn-secondary dropdown-toggle opt " type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
  City
</button>
<ul class="dropdown-menu " aria-labelledby="dropdownMenuClickableInside">
  <li >{
       data.map((item)=>{
          return( <button className='opt-txt' onClick={()=>{setCity(item.city)}}>{item.city}</button>
   )
       
})
}</li>
  
</ul>
            </div>
  

    }
</ul>


</div>

   
  
{
    ride=="nearest"?<Card data={data} dis={user.station_code} state={state} city={city} ride={ride}/>:<h1></h1>
}     
{
     ride=="upcomming"?<Card data={data} dis={user.station_code} state={state} city={city} ride={ride}/>:<h1></h1>
}

{
     ride=="past"?<Card data={data} dis={user.station_code} state={state} city={city} ride={ride}/>:<h1></h1>
}






    </div>










    
    </div>


   )
 }
 
 export default Home