import './Game.css'

type gameInfo ={
  name: string,
  image: string,
}

const Game = ({name, image}: gameInfo) => {
  return (
    <div className="Game">
        <h1 className="GameName">{name}</h1>
        <img className="GameImage" src={image} alt="a videogame" />
    </div>
  )
}

export default Game