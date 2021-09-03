import "./SongInfo.css";
const SongInfo = ({ song }) => {
  return (
    <div className="song-container">
      <div className="cover">
        <img src={song.coverUrl} alt="" />
      </div>

      <h2 className="title">{song.title}</h2>
      <p className="artist">{song.artist}</p>
    </div>
  );
};

export default SongInfo;
