import React, { useEffect, useState } from "react";

function Myprompt() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/gsfuga7sbf5ot") // API URL from SheetDB
      .then((res) => res.json())
      .then((data) => setPrompts(data));
  }, []);

  return (
    <div className="app">
      <h1>🚀 My Prompt Bank</h1>
      <div className="prompt-list">
        {prompts.map((p) => (
          <div key={p.id} className="prompt-card">
            <h2>{p.title}</h2>
            <p><b>Category:</b> {p.category}</p>
            <p>{p.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myprompt;