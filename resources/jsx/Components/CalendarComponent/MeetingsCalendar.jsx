import {useState} from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';
import "./MeetingsCalendar.css"


export const MeetingsCalendar = ({})=>{

  //Yael: pasarme las reuniones de a cuerdo al mes seleccionado. Dejo el ejemplo de los valores.
   const meetings = [
    { id:1, date: '2024-11-01', time: '10:00 AM'},
    { id:2, date: '2024-11-02', time: '2:00 PM' },
    { id:7, date: '2024-12-04', time: '9:00 AM' },
  ];

  //seleccion del mes
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1);
    setCurrentDate(newDate);
  };

  const renderDaysNames = () => {
    const names = [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    const blocks = [];
    names.map((item, key)=>{
      blocks.push(<div key={item} className="dayBlock">{item}</div>)
    });
    return blocks;
  }

  const renderDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<div className="day empty" key={`empty-${i}`}></div>);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const meeting = meetings.find(meeting => meeting.date === dateString);
      days.push(
        <div
          className={`day ${meeting ? 'has-meeting' : ''}`}
          key={i}>
          {i}
        </div>
      );
    }

  return days;
};

return (
    <div className="calendar">
      <header>
        <button className="navigateButton" onClick={() => changeMonth(-1)}> {"◄"} </button>
        <h1>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h1>
        <button className="navigateButton" onClick={() => changeMonth(1)}> {"►"} </button>
      </header>
      <div className="daysNames">
        {renderDaysNames()}
      </div>
      <div className="days">
        {renderDaysInMonth()}
      </div>
    </div>
  );
}
