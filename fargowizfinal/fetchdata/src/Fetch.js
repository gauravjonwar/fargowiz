import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Fetch() {
    const navigate = useNavigate()
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phonenumber,setPhonenumber] = useState('')
    const[message,setMessage] = useState('')

    function handleform(e){
        e.preventDefault()
        const formdata = {name,email,phonenumber}
        fetch('/api',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
           // console.log(data)
            if(data._id){
                setMessage("Successfully inserted")
                navigate('/show')
            }
        })
    }
    return ( 
        <>
        <h2>Add data</h2>
        {message}
        <form method="post" onSubmit={(e)=>{handleform(e)}}>
            <label>name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <label>email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <label>phonenumber</label>
            <input type="text" value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}} />
            <button type="submit"> add Here</button>
        </form>
        </>
     );
}

export default Fetch;