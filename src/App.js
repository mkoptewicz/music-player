import { useEffect, useRef, useState } from "react";

import Nav from "./components/Nav";
import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import SongList from "./components/SongList";

import "./App.css";
const URL = "https://examples.devmastery.pl/songs-api/songs";

function App() {
  const [songListActive, setSongListActive] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSong = songs[currentSongIndex];

  const audioRef = useRef();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(
            "We couldn't get you the songs this time. Please try again later."
          );
        }
        const data = await response.json();
        setSongs(data);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchSongs();
  }, []);
  return (
    <div className={`App ${songListActive ? "song-list-active" : ""}`}>
      <Nav onToggleSongList={setSongListActive} />
      <SongInfo />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        onTogglePlay={setIsPlaying}
      />
      <SongList
        songListActive={songListActive}
        songs={songs}
        currentSong={currentSong}
      />
      <audio ref={audioRef} src={currentSong?.audioUrl}></audio>
    </div>
  );
}

export default App;
