import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
   
   const navigate= useNavigate()
   const{id} = useParams()
   useEffect(()=>{
    fetch(`/api/deleterecord/${id}`,{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((data)=>{
       // console.log(data)
       if(data.message="successfully Deleted"){
       navigate('/show')
    }
    })
   },[])
    return ( 
        <>
        
        </>
     );
}

export default Delete;