import React from 'react'
import AOS from 'aos'
import WebEffect from './Components/WebEffect/WebEffect';
import Home from './Components/Home/Home';
import Header from './Components/Home/Header/Header';
import Bullets from './Components/Bullets/Bullets';
import NewRelease from './Components/NewRelease/NewRelease';
import Reviews from './Components/Reviews/Reviews';
import Contacts from './Components/Contacts/Contacts';
import Music from './Components/Music/Music';
import Examples from './Components/Examples/Examples';
import './App.css'
import 'aos/dist/aos.css'

function App(props) {
    AOS.init()
    return (
        <div>
            <WebEffect/>
            <Header/>
            <Home/>
            <Examples examples={props.state.examples}/>
            <Bullets/>
            <NewRelease newRelease={props.state.newRelease}/>
            <Music music={props.state.music}/>
            <Reviews reviewers={props.state.reviews}/>
            <Contacts socials={props.state.socials}/>
        </div>
    );
}

export default App;
