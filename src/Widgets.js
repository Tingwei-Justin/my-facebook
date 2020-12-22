import React from 'react'
import "./Widgets.css"

const Widgets = () => {
    return (
        <div className="widget">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookforDevelopers%2F&tabs=timeline&width=340&height=1500"
                title="widget"
                width="340"
                height="100%"
                style={{ border: "none", overflow:"hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            >

            </iframe>
        </div>
    )
}

export default Widgets
