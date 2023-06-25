import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../home.css'
const Home = () => {
  const[details,setDetails] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])
  


  const fetchdata =async()=>{
    try {
      const {data} = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_pTHCrBlnsVGgi2kVOr5PP7A3neP1dKuxghHdrbjz8wSupVP1vCorZGdL4e1M8JjF')
      setDetails(data)
      console.log(details)
    } catch (error) {
      
    }
  }

  return (
    <div>
       {/* {catBreeds.map((breed) => (
         <div key={breed.id}>
           <h3>{breed.name}</h3>
           <p>{breed.description}</p>
         </div>))} */}
    <div className='title'>Cats images</div>
      {details.map((i)=>(
        <div className='cintainer' key={i.id} >
          {/* <div>temprament: {i.breeds[3].description}</div> */}
          <img src={i.url} alt="Cat" />
          {/* <div>{i.description}</div> */}
          {/* <div>{i.name}</div> */}
           
        </div>
       ))}
    </div>
  )
}

export default Home
