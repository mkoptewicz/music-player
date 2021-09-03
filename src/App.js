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
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    };
    fetchSongs();
  }, []);

  const changeSongHandler = direction => {
    if (direction === "prev") {
      setCurrentSongIndex(
        currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1
      );
    }
    if (direction === "next") {
      setCurrentSongIndex(
        currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1
      );
    }
  };
  const selectSongHandler = selectedSong => {
    const audioIndex = songs.findIndex(
      song => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
      setIsPlaying(true);
    }
  };

  return (
    <div className={`App ${songListActive ? "song-list-active" : ""}`}>
      <Nav onToggleSongList={setSongListActive} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SongInfo song={currentSong} />
          <Player
            audioRef={audioRef}
            isPlaying={isPlaying}
            onTogglePlay={setIsPlaying}
            currentSong={currentSong}
            onChangeSong={changeSongHandler}
          />
          <SongList
            songListActive={songListActive}
            songs={songs}
            currentSong={currentSong}
            onSelect={selectSongHandler}
          />
          <audio ref={audioRef} src={currentSong?.audioUrl} ></audio>
        </>
      )}
    </div>
  );
}

export default App;
