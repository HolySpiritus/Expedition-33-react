import { useState, useEffect } from 'react'
import './index.css'

function DigitalClock() {

  const [time, setTime] = useState(new Date());
    
    useEffect(() => { 
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
}, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
    }
    function padZero(number){
        return (number < 10 ? '0' : '') + number;
    }

  return (
    <>
    <div id='header'>
    <div className="background">
      <div className="clock-container">
        <div className="digital-clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default DigitalClock;