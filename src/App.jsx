import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card_Characters from './assets/components/Card_Characters'

//INFORMATION ABOUT MARVEL CHARACTER


// https://gateway.marvel.com:443/v1/public/characters?apikey=e9de6e97c2cb1970f1db9c79a8c48f9c
// Private Key: 944ad980a0b4a28d7f2013a2b840f2612bc0dace
// Public Key: e9de6e97c2cb1970f1db9c79a8c48f9c
// ts: 1
// ts+private+public 1944ad980a0b4a28d7f2013a2b840f2612bc0dacee9de6e97c2cb1970f1db9c79a8c48f9c

//hash: eccfe1aa0468518a3eb902967b003b13  04148215451 carlos vera



function App() {



  
 

  const [characters, setCharacters] = useState([])

  const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e9de6e97c2cb1970f1db9c79a8c48f9c&hash=eccfe1aa0468518a3eb902967b003b13`
  useEffect (()=> {
    axios.get(URL)
      .then(res => {
        setCharacters(res.data.data.results)
        //console.log(res.data.data.results)
      })
      .catch(err => console.log(err))
  },[])

  //console.log(characters.length)

  const getRandomCharaters = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  console.log(getRandomCharaters(characters))

 
  return (
    <div className="App">
      <Card_Characters character={getRandomCharaters(characters)}/>
      <Card_Characters character={getRandomCharaters(characters)}/>
      <Card_Characters character={getRandomCharaters(characters)}/>
      
    </div>
  )
}

export default App
