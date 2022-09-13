import { useEffect } from "react";
import { useState } from "react"

const Home = () => {
  const [characterName, setCharacterName] = useState(); 
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())
    .then(res => setCharacterName(res.name))
  }, [])


  return (
    <div>
      <h2> Home</h2>
      {characterName}
      
    </div>
  )
}

export default Home