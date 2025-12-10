import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/msg")
      .then((res) => res.json())
      .then((data) => setMsg(data.msg));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Frontend Running 🎨</h1>
      <h2>Backend Says:</h2>
      <p>{msg}</p>
    </div>
  );
}

export default App;
