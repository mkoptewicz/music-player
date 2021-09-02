import "./SongInfo.css";
const SongInfo = () => {
  return (
    <div className="song-container">
      <div className="cover">
        <img
          src="https://examples.devmastery.pl/assets/audio/berlin-dream.jpg"
          alt=""
        />
      </div>

      <h2 className="title">Title</h2>
      <p className="artist">Artist</p>
    </div>
  );
};

export default SongInfo;
