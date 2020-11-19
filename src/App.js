import React from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Canvas from "./Components/Canvas/Canvas";
import Home from "./Components/Home/Home";
import Header from "./Components/Home/Header/Header";
import Bullets from "./Components/Bullets/Bullets";
import NewRelease from "./Components/NewRelease/NewRelease";
import Reviews from "./Components/Reviews/Reviews";
import Contacts from "./Components/Contacts/Contacts";
import Music from "./Components/Music/Music";
import Player from "./Components/Player/Player";

function App(props) {
    AOS.init()
    return (
        <div>
            {/*<Canvas/>*/}
            <Header/>
            <Home/>
            <Bullets/>
            {/*<Player audio={props.state.Audio}/>*/}
            <NewRelease newRelease={props.state.NewRelease}/>
            <Music music={props.state.Music}/>
            <Reviews reviewers={props.state.Reviews}/>
            <Contacts socials={props.state.Socials}/>
        </div>
    );
}

export default App;
