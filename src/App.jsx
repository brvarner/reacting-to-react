import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";

const App = () => {
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setLoaded(true)
    }, 3000)
  }, [loaded])

  if (loaded === false) {
    return (
      <>
        <h1>Website Loading...</h1>
        <button
          className="btn btn-primary my-3"
          type="button"
          onClick={(e) => setLoaded(true)}
        >Click Me to Load Page</button>
      </>
    );
  }

  return (
    <>
      <Greeter phrase="Hello there" name="Brandon" />
      <Greeter phrase="Howdy" name="Richard" />
      <Greeter phrase="Wuzzup" name="Resha" />
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <p className="py-2">You are logging in as: {username}</p>
    </>
  );
};

export default App;
