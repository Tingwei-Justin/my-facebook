import React from 'react'
import Story from './Story'
import "./StoryReel.css"
import b1 from "./img/1.jpeg"
import b2 from "./img/2.jpeg"
import b3 from "./img/3.jpeg"
import b4 from "./img/4.jpeg"
import b5 from "./img/5.jpeg"
import p1 from "./img/p1.JPG"
import p2 from "./img/p2.JPG"
import p3 from "./img/p3.JPG"
import p4 from "./img/p4.JPG"
import p5 from "./img/p5.JPG"
// import profile from "./img/profile.jpeg"

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image={b1}
                profile_src={p3}
                title="Justin"
            />
            <Story
                image={b2}
                profile_src={p5}Í
                title="K."
            /> 
            <Story
                image={b3}
                profile_src={p4}
                title="Kai"
            />
            <Story
                image={b4}
                profile_src={p2}
                title="Tim Xi"
            />
            <Story
                image={b5}
                profile_src={p1}
                title="Constantine"
            />
        </div>

    )
}

export default StoryReel
