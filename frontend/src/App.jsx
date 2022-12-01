/* eslint-disable import/no-unresolved */
import Cards from "@components/Cards";
import Header from "@components/Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [reload, setReload] = useState(true);

  const handleScore = () => {
    setScore(score + 1);
  };

  const handleReload = () => {
    setReload(!reload);
    setScore(0);
  };

  return (
    <div className="app">
      <Header score={score} handleReload={handleReload} />
      <Cards handleScore={handleScore} reload={reload} />
    </div>
  );
}

export default App;
