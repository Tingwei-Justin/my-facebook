import React from 'react'
import "./Story.css"
import { Avatar } from "@material-ui/core";

const Story = (props) => {
    const { image, profile_src, title } = props;
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar className="story__avator" src={profile_src}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
