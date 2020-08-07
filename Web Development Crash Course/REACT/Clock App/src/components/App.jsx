import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [curTime, setTime] = React.useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h2>{curTime}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
