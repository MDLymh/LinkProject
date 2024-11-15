import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';
import "./MeetingsCalendar.css"

function MeetingsCalendar(){
  // Sample meeting data
  const meetings = [
        { date: '2024-11-01', time: '10:00 AM', title: 'Contactar al cliente' },
        { date: '2024-11-02', time: '2:00 PM', title: 'Visitar instalaciones' },
        { date: '2024-11-05', time: '1:00 PM', title: 'Tomar requerimientos' },
        { date: '2024-11-10', time: '11:00 AM', title: 'Planeacion' },
        { date: '2024-11-15', time: '3:00 PM', title: 'Diseno y datos' },
        { date: '2024-11-20', time: '9:00 AM', title: 'Diseno y validacion' },
    ];

    // Get current date and month
    const today = new Date();
    
    const startDate = startOfMonth(today);
    const endDate = endOfMonth(today);
    const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

    // Create a set of meeting dates for quick lookup
    const meetingDates = new Set(meetings.map(meeting => meeting.date));

    return(
        <div className="month-calendar-container">
            <label className="labelMeetings">Proximas reuniones</label>
           <span><img className="backwardMonth"/> <h2>{format(today, 'MMMM yyyy')}</h2> <img className="forwardMont"/></span>
            <div className="month-calendar">
                {daysInMonth.map((day, index) => (
                    <div 
                        className={`calendar-day ${meetingDates.has(format(day, 'yyyy-MM-dd')) ? 'has-meeting' : ''}`} 
                        key={index}>
                        <div className="day-number">{format(day, 'd')}</div>
                        <div className="meetings">
                            {meetings
                                .filter(meeting => isSameDay(new Date(meeting.date), day))
                                .map((meeting, idx) => (
                                    <div className="meeting" key={idx}>
                                        <strong>{meeting.time}</strong>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default MeetingsCalendar