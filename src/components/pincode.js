import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const[val,setVal]= useState("")
  const fncval = (e)=>{
    setVal(e.target.value)
  }
  const pressed =()=>{
    console.log(val)
    fetchdata()
  }
  const postcode = "postcode"
  const fetchdata = async()=>{

    try {
      
      const dataa = await axios.get(`https://api.zippopotam.us/us/${val}`)
      console.log(dataa.data)
      setDetails(dataa.data)
    } catch (error) {
      alert("enter valid zip code")
    }

  }
  const[details,setDetails]= useState([])

  // useEffect(() => {
  //   fetchdata()
  // }, [])
  
  return (
    <div>
      <input value={val} onChange={fncval}  /><button onClick={pressed} >click me</button>
      {details &&( 
        <>
        <div>{details.country}</div>
        <div>{details.postcode}</div>
        </>
        )}
      
    </div>
  )
}

export default Home
