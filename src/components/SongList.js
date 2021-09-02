import SingleSong from "./SingleSong";

import "./SongList.css";

const SongList = ({ songListActive, songs, currentSong }) => {
  return (
    <div
      className={`song-list-container ${
        songListActive ? "song-list-expanded" : ""
      }`}
    >
      <h2>Songs</h2>
      <ul className="songs">
        {songs.map(song => (
          <SingleSong
            key={song.audioUrl}
            song={song}
            isCurrent={song.url === currentSong.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default SongList;
