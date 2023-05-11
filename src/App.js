
import './App.scss';
import React , {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState([])
  const [city , setCity] = useState('')
  const [temp , setTemp] = useState(0)

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
      console.log(foundCity)

    
    console.log(data)
    setCity(foundCity)
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
        <div className="weather-card">
            <input placeholder="find your countries..." onChange={handleOnChange}></input>
           
            
              {city.map( (item) => {
                return(
                  
              <div>
                <h2>Country Name {item.stacja}</h2>
                <h1>{item.temperatura}</h1>
                <p> Today is : Sunny</p>
              </div>
                    
                    
                )
              })}
               
              
            
            
        </div>
    </div>
  );
}

export default App;
