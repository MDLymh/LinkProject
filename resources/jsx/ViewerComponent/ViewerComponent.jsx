import React from "react";
import "./ViewerComponent.css"
import Sidebar from "../Sidebar/SidebarComponent";
import UserProfile from "../UserProfileViewerComponent/UserProfile";
import MeetingsCalendar from "../CalendarComponent/MeetingsCalendar";
import NotificationComponent from "../NotificationComponent/NotificationComponent";

const ProjectsviewerComponent = () =>{
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
                <Sidebar props/>
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

export default ProjectsviewerComponent