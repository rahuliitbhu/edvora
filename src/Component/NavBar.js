import React, { useEffect, useState } from 'react'

export const NavBar = () => {
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
useEffect(()=>{
  
  fetchUser()
 
 },[])
  return (
    <div>

<nav className="nav-extended nav">
    <div className="nav-wrapper ">
      <a style={{marginLeft:"11px"}} href="#" className="brand-logo">Edvora</a>
     
      <ul  style={{marginLeft:"1113px"}}>
        <li ><a style={{marginLeft:"150px"}} href="sass.html">{user.name}</a></li>
        
      <li ><img src={user.url} style={{borderRadius:"50%",height:"44px",width:"44px",marginLeft:"20px"}} /></li>
      </ul>
    </div>

  </nav>

    </div>
  )
}
