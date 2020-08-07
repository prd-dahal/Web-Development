import React from "react";

function Dictionary(paras) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {paras.emoji}
        </span>
        <span>{paras.name}</span>
      </dt>
      <dd>{paras.meaning}</dd>
    </div>
  );
}

export default Dictionary;
