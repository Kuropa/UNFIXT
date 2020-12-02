import React from 'react';
import SongTitle from './components/graphics/SongTitle'
import Playlist from './components/playlist/Playlist'
import Controls from './components/Controls'
import PlayerState from './context/PlayerState'

const AudioPlayer = (props) => {

    return (
        <PlayerState props={props.props}>
            <SongTitle />
            <Controls />
            <Playlist />
        </PlayerState>
    );
}

export default AudioPlayer;
