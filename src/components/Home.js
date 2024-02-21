import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../home.css'
const Home = () => {

  const[details,setDetails] = useState([])

  const[imp,setInp] = useState([])
  const[imp2,setInp2] = useState([])
  
  const inpchange=(e)=>{
    setInp(e.target.value)
  }
  const inpchange2=(e)=>{
    setInp2(e.target.value)
  }

  const buttonpress=(e)=>{
    fetchdata();
    e.preventDefault()
  }
  const buttonpress2=(e)=>{
    fetchdata2();
    console.log(imp2)
    e.preventDefault()
  }

  // useEffect(() => {
  //   fetchdata();
  // }, [])

  const fetchdata=async()=>{
    try {
      const response= await axios.get(`https://api.postalpincode.in/pincode/${imp}`)
      const result = response.data
      // console.log(response.data)
      // console.log(response.data[0].PostOffice[0].Name)
      if(result && result.length>0){
        setDetails(result)
      }else{
        
        setDetails("enter a valid pincode to fetch")
      }
    } catch (error) {
      alert('fetch failed')
    }
  }

  const fetchdata2=async()=>{
    try {
      const response= await axios.get(`https://api.postalpincode.in/postoffice/${imp2}`)
      const result = response.data
      // console.log(response.data)
      // console.log(response.data[0].PostOffice[0].Name)
      if(result && result.length>0){
        setDetails(result)
      }else{
        
        setDetails("enter a valid pincode to fetch")
      }
    } catch (error) {
      alert('fetch failed')
    }
  }

  return (
    <div className='homebdy'>
      <div className='contnr'>
    <div className='bar1'>Postal Finder</div>
    <div className='bar2'>

      <form className='formm' >
        <div>
          <div className='box2text'>

          Enter any pincode below to search post offices !
          </div>

          <div className='box11'>

        <input placeholder='Search By Pincode Here !' value={imp} onChange={inpchange} />
        <button onClick={buttonpress}>Get Details</button>
          </div>
        
        </div>
        <div>
        <div className='box2text'>

          Enter any CityName below to search post offices !
          </div>
        <input placeholder='Search By CityName Here !' value={imp2} onChange={inpchange2} />
        <button onClick={buttonpress2}>Get Details</button>
        </div>
        
        <div> </div>
      
      </form>
      <div className='box2text'>

          You have limited number of searches available as it's a free version of our application!
          <br></br>
          </div>
      <div className='box3'>How it works .. <br></br><hr></hr>PostFinder is your go-to platform for finding comprehensive information about post offices in any area. Whether you need to locate a specific post office or explore postal services in a particular city, PostFinder has got you covered. Simply enter the pincode or city name, and our intelligent search engine will provide you with detailed results, including addresses, contact numbers, working hours, and additional services available at each post office. With PostFinder, managing your postal needs has never been easier. Discover convenience and efficiency at your fingertips.</div>
    </div>
    
      </div>
        {details &&
          details.map((i)=>(
            <div >
            <div><h4>{i.Message}</h4></div>
            <div><h4>Status: {i.Status}</h4></div>
            {i.PostOffice &&  i.PostOffice.map((office)=>(
              <div className='cont' key={office.name}>
                <br></br>
                <div>Name: {office.Name}</div>
                <div>Branch: {office.BranchType}</div>
                <div>Delivery Status: {office.DeliveryStatus}</div>
                <div>Circle: {office.Circle}</div>
                <div>Reigon: {office.Region}</div>
                <div>Country: {office.Country}</div>
                <div>Pincode: {office.Pincode}</div>
              <br></br>
            </div>
            ))}
            </div>
          ))
        }
        {/* <div className='desc'> */}
        {/* PincodeFinder is your go-to destination for hassle-free pincode information. With just a few clicks, you can easily access comprehensive details for any pincode across the globe. Whether you're searching for a specific location, planning a delivery, or need to verify an address, PincodeFinder has got you covered. Our intuitive interface allows users to enter any pincode and instantly retrieve valuable information, including city, state, country, and additional useful details. Say goodbye to endless searches and confusion – PincodeFinder simplifies the process and ensures you have the accurate information you need, right at your fingertips. Experience convenience, reliability, and efficiency with PincodeFinder, the ultimate pincode information solution. */}
        {/* PostFinder is your go-to platform for finding comprehensive information about post offices in any area. Whether you need to locate a specific post office or explore postal services in a particular city, PostFinder has got you covered. Simply enter the pincode or city name, and our intelligent search engine will provide you with detailed results, including addresses, contact numbers, working hours, and additional services available at each post office. With PostFinder, managing your postal needs has never been easier. Discover convenience and efficiency at your fingertips. */}
        {/* </div> */}
        
    </div>
  )
}

export default Home
