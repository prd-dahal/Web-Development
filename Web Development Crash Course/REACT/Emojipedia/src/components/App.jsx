import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

function createDict(dict) {
  return (
    <Dictionary
      key={dict.id}
      emoji={dict.emoji}
      name={dict.name}
      meaning={dict.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createDict)}</dl>
    </div>
  );
}

export default App;
