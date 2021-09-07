import React from 'react';

import SingleSong from "./SingleSong";

import "./SongList.css";

const SongList = React.memo(({ songListActive, songs, currentSong, onSelect }) => {
  
  return (
    <div
      className={`song-list-container ${
        songListActive ? "song-list-expanded" : ""
      }`}
    >
      <h2>Songs</h2>
      <ul>
        {songs.map(song => (
          <SingleSong
            key={song.audioUrl}
            song={song}
            isCurrent={song.audioUrl === currentSong.audioUrl}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </div>
  );
});

export default SongList;
