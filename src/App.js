
import './App.scss';
import React , {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState([])
  let [city , setCity] = useState()
  const [prawda , setPrawda] = useState(false)
 

  useEffect( () => {
    fetch("https://danepubliczne.imgw.pl/api/data/synop")
    .then( response => response.json())
    .then( data => setData(data))
  } , [])

   

  const handleOnChange = (e) =>{
    setPrawda(false)
    e.preventDefault()
    const valueInput = e.target.value

    const newArr = [...data]
   
    console.log(data)
    
       const foundCity = newArr.filter( (item)=> item.stacja.includes(valueInput))
      console.log(foundCity)
      // console.log(valueInput)
      
      
      setCity(foundCity)
      console.log(city)
     
      
      
  }



  const handleClick = () => {
    
    setPrawda(true)
   }
  return (
    <div className="App">
      <h1>Weather App</h1>
        <div className="weather-card">
            <input placeholder="find your City..." onChange={handleOnChange}></input>
            <button onClick={handleClick}>Chosse City</button>
{/* 
            <h2>{data.stacja}</h2>
           <h1>{data.temperatura}</h1> 
            <p>{data.data_pomiaru}</p> */}

            {prawda ?  city.map( (item) => {
  return(
    <div key={item.stacja}>
      <h1>{item.stacja}</h1>
      <h1>{item.temperatura}</h1>
    </div>
  )
 }): ""}

              
        </div>
    </div>
  );
}

export default App;
