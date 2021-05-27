import React from 'react';
import danceIcon from '../assets/dance-icon.png';
import getArtist from '../utils/getArtist';
import './TopDanceSong.css';

const TopDanceSong = ({ artistId }) => {

    const artistData = getArtist(`https://api.spotify.com/v1/artists/${artistId}`)

    return (
        <div className="component">
            <h4 className="danceable-song-heading">Most danceable song</h4>
            <div className="horizontal-component">
                <img src={artistData.top_danceability_song.album_cover_image} alt="album cover" className="album-image"/>
                <div>
                    <h5 className="song-heading">{artistData.top_danceability_song.song_title}</h5>
                    <p className="small-gray">{artistData.top_danceability_song.song_author}</p>
                </div>
                <div>
                    <img src={danceIcon} alt="dance icon" className="dance-icon"/>
                    <p className="score">{artistData.top_danceability_song.danceability}/5.0</p>
                </div>
            </div>
        </div>
    )
}

export default TopDanceSong;