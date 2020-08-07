import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function submitChange() {
    setValue(name);
  }
  return (
    <div className="container">
      <h1>{value}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
      <button onClick={submitChange}>Submit</button>
    </div>
  );
}

export default App;
