//importing necessary React and npm designs.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from 'react-calendar' //Calendar Ui
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns' //utility for formatting date and time

function App() {
  const [date, setDate] = useState(new Date());

  return (
    //container that styles the contents
    <div className="clock-container">
      {/* display the current time in 24-hr format*/}
      <h1 className="clock-time">{format(date, 'HH:mm:ss')}</h1>
      {/* React calendar component*/}
      <Calendar onChange={setDate} value={date} />
      {/*Display selected date */}
      <p className="selected-date"> 
         {format(date, 'PPpp')}</p>
    </div>
  )
}

export default App
