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
      <ul className="songs">
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
      </ul>
    </div>
  );
};

export default SongList;
