import React from 'react'
import '../App.css';
import songs from '../assets/songs.png';

const SongsList = () => {
    return (
        <img src={songs} alt="song list" className="main-img"/>
    )
}

export default SongsList;