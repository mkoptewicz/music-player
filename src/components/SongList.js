import SingleSong from "./SingleSong";

import "./SongList.css";

const SongList = () => {
  return (
    <div className="song-list-container song-list-expanded">
      <h2>Songs</h2>
      <div className="songs">
        <SingleSong />
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
