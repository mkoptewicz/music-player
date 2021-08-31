import SingleSong from "./SingleSong";

const SongList = () => {
  return (
    <div className="song-list-container">
      <p>Songs</p>
      <div className="songs">
        <SingleSong />
      </div>
    </div>
  );
};

export default SongList;
