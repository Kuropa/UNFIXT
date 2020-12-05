import React from 'react';
import '../../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import WebEffect from "../WebEffect/WebEffect";
import Header from "../Home/Header/Header";
import Home from "../Home/Home";
import Examples from "../Examples/Examples";
import After from "../BeforeAfter/After";
import Bullets from "../Bullets/Bullets";
import NewRelease from "../NewRelease/NewRelease";
import Before from "../BeforeAfter/Before";
import Music from "../Music/Music";
import Reviews from "../Reviews/Reviews";
import Contacts from "../Contacts/Contacts";

const Content = (props) => {
        AOS.init()
    return (
        <div>
            <WebEffect
                class='canvas'/>
            <Header/>
            <Home/>
            <Examples examples={props.state.examples}/>
            <After/>
            <Bullets/>
            <NewRelease newRelease={props.state.newRelease}/>
            <Before/>
            <Music music={props.state.music}/>
            <After/>
            <Reviews reviewers={props.state.reviews}/>
            <Before/>
            <Contacts socials={props.state.socials}/>
        </div>
    )
}

export default Content