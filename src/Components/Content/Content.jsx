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
import ExampleVideo from "../ExampleVideo/ExampleVideo";
import UpButton from "../UpButton/UpButton";
import ABExamples from "../ABExamples/ABExamples";
//import Prices from "../Prices/Prices";

const Content = (props) => {
        AOS.init()
    return (
        <div>
            <WebEffect class='canvas'/>
            <Header/>
            <Home/>
            <UpButton/>
            <Examples examples={props.state.examples}/>
            <ExampleVideo examplesVideo={props.state.examplesVideo}/>
            <After/>
            {/*<Prices prices={props.state.prices}/>*/}
            <Bullets/>
            <Before/>
            <ABExamples audio={props.state.audio}/>
            <After/>
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