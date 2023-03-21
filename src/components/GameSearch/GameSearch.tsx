import React from 'react'
import {ChangeEvent} from 'react'
import './GameSearch.css'

export type search ={
  value: string,
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>)=> void
}

const GameSearch = ({clickHandler, onChangeHandler, value} : search)=> {
  return (
    <form className="GameSearch">
        <input className="GameSearchInput" onChange={onChangeHandler} value={value} />
        <button className="GameSearchButton" onClick={clickHandler} type="button">Search Games</button>
    </form>
  )
}

export default GameSearch