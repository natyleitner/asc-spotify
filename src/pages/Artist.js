import React from 'react';
import '../App.css';

import TopDanceSong from '../components/TopDanceSong';
import MeatballsMenu from '../components/MeatballsMenu';
import Menu from '../components/Menu';
import PlayButton from '../components/PlayButton';
import Player from '../components/Player';
import RHeader from '../components/RHeader';
import SongsList from '../components/SongsList';
import getArtist from '../utils/getArtist';

const Artist = ({id}) => {
  const artistData = getArtist(`https://api.spotify.com/v1/artists/${id}`) // for demo use this (not for schools children)
  return (
    <div>
      <div className="App">
      <Menu />
      <main className="App-main">
        <RHeader />
        <section className="details">
            <PlayButton />
            <button>FOLLOW</button>
            <MeatballsMenu />
            <TopDanceSong artistId={id}/>
        </section>
          <SongsList />
          <div className="darkness"></div>
      </main>
      </div>
      <footer>
        <Player />
      </footer>
    </div>
  );
}

export default Artist;
