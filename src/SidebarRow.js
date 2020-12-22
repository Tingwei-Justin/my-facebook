import { Avatar } from '@material-ui/core';
import React from 'react'
import "./SidebarRow.css"

function SidebarRow(props) {
    const {avatar_src, Icon, title} = props;
    return (   
        <div className="sidebarRow">
            {avatar_src && <Avatar src={avatar_src}/>}
            {Icon && <Icon />}
            <p4>{title}</p4>
        </div>
    )
}

export default SidebarRow
