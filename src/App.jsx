import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  // 1. Setup state to hold the current time
  const [time, setTime] = useState(new Date());

  // 2. Setup a timer to update the state every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <h1 className="clock-title">Productivity Dashboard</h1>
      <div className="clock-card">
    
        <p className="clock-display">
          {format(time, 'eeee, MMMM do, yyyy | hh:mm:ss a')}
        </p>
      </div>
    </div>
  );
}

export default App;