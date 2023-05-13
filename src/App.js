
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

    const foundCity = newArr.filter( (item)=> item.stacja.includes(valueInput))
    
      setCity(foundCity)
    
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


            {prawda ?  city.map( (item) => {
  return(
    <div key={item.stacja}>
      <h1>{item.stacja}</h1>
      <p>temperatura</p>
      <h1>{item.temperatura}</h1>
      <h2>cisnienie: {item.cisnienie}</h2>
    </div>
  )
 }): ""}

              
        </div>
    </div>
  );
}

export default App;
