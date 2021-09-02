import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import SongList from "./components/SongList";

import "./App.css";
const URL = "https://examples.devmastery.pl/songs-api/songs";

function App() {
  const [songListActive, setSongListActive] = useState(false);
  const [songs, setSongs] = useState([]);
  

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
      <Player />
      <SongList songListActive={songListActive} />
      <audio></audio>
    </div>
  );
}

export default App;
