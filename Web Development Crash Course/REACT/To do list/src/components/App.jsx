import React from "react";

function App() {
  const [items, updateItem] = React.useState([]);
  const [inputText, setInputText] = React.useState("");

  function changeHandler(event) {
    setInputText(event.target.value);
  
  }
  function addItem(event) {
    updateItem((prevValue) => {
      return [...prevValue, inputText];
    });
  
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} value={inputText} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
