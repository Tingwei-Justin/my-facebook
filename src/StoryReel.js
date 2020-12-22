import React from 'react'
import Story from './Story'
import "./StoryReel.css"
import b1 from "./img/b1.jpg"
import b2 from "./img/b2.jpg"
import b3 from "./img/b3.jpg"
import b4 from "./img/b4.jpg"
import b5 from "./img/b5.jpg"
import profile from "./img/profile.jpeg"

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image={b1}
                profile_src={profile}
                title="Justin"
            />
            <Story
                image={b2}
                profile_src={profile}
                title="Iggy"
            /> 
            <Story
                image={b3}
                profile_src={profile}
                title="Bob"
            />
            <Story
                image={b4}
                profile_src={profile}
                title="Paul"
            />
            <Story
                image={b5}
                profile_src={profile}
                title="Peter"
            />
        </div>
    )
}

export default StoryReel
