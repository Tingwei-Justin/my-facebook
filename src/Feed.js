import React, { useState, useEffect } from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import profile from "./img/profile.jpeg"
import db from "./firebase"

const Feed = () => { 
    const [posts, setPosts] = useState([]);
    // Only run once
    useEffect(() => {
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        });
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
            {/* <Post 
                profilePic={profile}
                message="WOW it works"
                timestamp="0:00"
                username="Justin"
                image={profile} 
            />
            <Post 
                profilePic={profile}
                message="WOW it works"
                timestamp="0:00"
                username="Justin"
                image={profile} 
            /> */}
        </div>
    )
}

export default Feed
