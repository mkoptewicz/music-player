import SingleSong from "./SingleSong";

import "./SongList.css";

const SongList = ({ songListActive, songs, currentSong, onSelect }) => {
  console.log(currentSong);
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
};

export default SongList;
