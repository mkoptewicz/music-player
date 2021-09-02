import SingleSong from "./SingleSong";

import "./SongList.css";

const SongList = ({ songListActive }) => {
  return (
    <div
      className={`song-list-container ${
        songListActive ? "song-list-expanded" : ""
      }`}
    >
      <h2>Songs</h2>
      <div className="songs">
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
      </div>
    </div>
  );
};

export default SongList;
