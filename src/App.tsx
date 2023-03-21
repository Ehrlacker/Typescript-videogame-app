import { useEffect, useState } from "react"
import GameSearch from "./components/GameSearch/GameSearch"
import Game from "./components/Game/Game"
import search from "./components/GameSearch/GameSearch"
import { ChangeEvent } from "react"
import {Result} from './types/types'

import "./App.css"


type gameProperties = {
  title:string
 
}


const App = () => {
  const [value, setValue] = useState("")
  const [gameSearchQuery, setGameSearchQuery] = useState("")
  const [games, setGames] = useState<Result[]>([])

  
useEffect(()=>{

  const getGames = async () => {
    const url = `https://api.rawg.io/api/games?key=845be540750447de9e2986ca0a7995a3&page_size=10&search_exact=true&search=${gameSearchQuery}`
    const response = await fetch(url)
    const resJSON = await response.json()
    setGames(resJSON.results)
    console.log(games)
  }
  getGames()
}, [gameSearchQuery])


const submitGameValueForSearch=(e: React.MouseEvent<HTMLButtonElement>)=>{
e.preventDefault()
setGameSearchQuery(value)
}
 

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return (
    <div className="App">
      <GameSearch
        value={value}
        onChangeHandler={handleFormChange}
        clickHandler={submitGameValueForSearch}
      />
      <div className="GameContainer">
        {games.map((game)=>{
          return(
            <Game
            key={game.id}
            name={game.name}
            image={game.background_image
            } />
          )
        })}
      </div>
    </div>
  )
}

export default App
