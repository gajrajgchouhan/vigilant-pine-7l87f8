import React, { useState, useEffect } from 'react';
import IcecastMetadataPlayer from 'icecast-metadata-player';

const URL =
  'https://software-mansion.github.io/react-native-audio-api/audio/voice/example-voice-01.mp3';

export default function App(props) {
  const [audioElement] = useState(new Audio());

  useEffect(() => {
    const player = new IcecastMetadataPlayer(URL, {
      onMetadata: (meta) => {
        console.log({meta});
      },
      onCodecUpdate: (args) => {
        console.log('Codec update', args)
      },
      onPlay: () => {
        // setPlaying(true);
      },
      onStop: () => {
        // setPlaying(false);
        // currentMetadata = "";
        // setMetadata(SELECT_OR_PLAY);
        // setCodecInfo();
      },
      onLoad: () => {
        // setPlaying(true);
        // setMetadata(LOADING);
        // setCodecInfo();
      },
      onError: (error) => {
        // currentMetadata = "";
        // setMetadata(error?.message || error);
        // setCodecInfo();
      },
      onRetry: () => {
        // currentMetadata = "";
        // setMetadata(RECONNECTING);
      },
      onStreamStart: () => {
        // setMetadata(
        //   newStation.metadataTypes.length
        //     ? currentMetadata || CONNECTED
        //     : "",
        // );
      },
      onSwitch: () => {
        // setMetadata(SWITCHING);
      },
    });
    player.play();
  }, [audioElement]);

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
console.log('Hello console');
