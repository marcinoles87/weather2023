
import './App.scss';
import React , {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState([])
  const [city , setCity] = useState([])
  const [prawda , setPrawda] = useState(false)
 

  useEffect( () => {
    fetch("https://danepubliczne.imgw.pl/api/data/synop")
    .then( response => response.json())
    .then( data => setData(data))
  } , [])

   

  const handleOnChange = (e) =>{
    e.preventDefault()
    const valueInput = e.target.value

    const newArr = [...data]
   
      const foundCity = newArr.filter(city => city.stacja.includes(valueInput))
      console.log(foundCity[0])
      console.log(valueInput)
      
      setCity(foundCity[0])


      console.log(city)
    
    
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
        <div className="weather-card">
            <input placeholder="find your City..." onChange={handleOnChange}></input>

            <h2>{city.stacja}</h2>
           <h1>{city.temperatura}</h1> 
            <p>{city.data_pomiaru}</p>

              
        </div>
    </div>
  );
}

export default App;
