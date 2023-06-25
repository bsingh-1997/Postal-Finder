
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
const Home = () => {
    const[details,setDetails] = useState([])
    useEffect(() => {
      fetchdata()
    }, [])
    const fetchdata=async()=>{
        try {
            const {data} = await axios.get('https://api.publicapis.org/entries')
            setDetails(data.entries)
            console.log(data)
        } catch (error) {
            console.log('err')
        }
    }
  return ( 
    <div>
      {details.map((i,index)=>(
        <div key={index}>
            <h4>{i.API}</h4>
            <h4>{i.Description}</h4>
            <h4>{i.Link}</h4>
        </div>
      ))}
    </div>
  )
}

export default Home
