import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Show() {
   const[stdata,setStdata] = useState([])
   useEffect(()=>{
    fetch('/api/').then((res)=>{return res.json()}).then((data)=>{
        setStdata(data)
    })
   },[])
    
    return ( 
        <>
        <h2>show data</h2>
        <table className='table table-hover'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phonenumber</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {stdata.map((result)=>(
                <tr key={result._id}>
                <td>{result.name}</td>
                <td>{result.email}</td>
                <td>{result.phonenumber}</td>
                <td><Link to={`/delete/${result._id}`}>delete</Link></td>

            </tr>
            ))}
            </tbody>
            
        </table>
        </>
     );
}

export default Show;