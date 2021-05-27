import React from 'react'
import '../App.css';
import playIcon from '../assets/play-icon-wb.jpeg';

const PlayButton = () => {
    return (
      <img src={playIcon} alt="play icon" className="play-icon"/>
    )
}

export default PlayButton;