import React from "react";
import {UserProfile,MeetingsCalendar} from "../";

export const ProjectsviewerComponent = () =>{
    const notifications = [
        { message: 'New message from John', timestamp: '2023-10-01 10:00 AM' },
        { message: 'Your order has been shipped', timestamp: '2023-10-01 09:30 AM' },
        { message: 'Meeting scheduled for tomorrow', timestamp: '2023-10-01 09:00 AM' },
        { message: 'New comment on your post', timestamp: '2023-10-01 08:45 AM' },
        { message: 'Password changed successfully', timestamp: '2023-10-01 08:00 AM' },
        { message: 'New follower: Alice', timestamp: '2023-10-01 07:30 AM' },
    ];


    return (<>
    <div className="main">
        <div className="appglass">
            <div className="leftmenu">
                {SidebarUserNav}
            </div>
            <div className="projectsboard">
                <UserProfile/>
            </div>
            <div className="rightmenu">
                <MeetingsCalendar/>
            </div>
        </div>
    </div>
    </>);
}

