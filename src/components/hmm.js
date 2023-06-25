import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {
    const[details,setdetails] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])
    
      const fetchdata = async()=>{
          try {
              const response = await fetch('https://api.publicapis.org/entries')
              const data = await response.json()
              // console.log(data.entries)
              if (data && data.entries && data.entries.length > 0) {
                setdetails(data.entries);
            }}
               catch (error) {
              console.log("errorororororo")
          }
      }
    


  return (
    <div>
      {details.map((entry,index)=>(
        <div key={index}>
            <h3>{entry.API}</h3>
            <h3>{entry.Description}</h3>
            <h3>{entry.Link}</h3>
            <h3>{entry.category}</h3>
        </div>
      ))}
      
      home
    </ div>
  )
}

export default Home
