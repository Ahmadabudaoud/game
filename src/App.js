import react, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Lead } from "./styles";

function App() {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(1);

  const submit = (guess) => {
    const randomNumber = Math.floor(Math.random() * 100);
    setAttempts(attempts + 1);

    if (attempts > 4 && guess !== randomNumber) {
      alert("Better luck next time");
    } else {
      if (guess < randomNumber) {
        alert("Too low");
      } else if (guess > randomNumber) {
        alert("Too high");
      } else {
        alert("We got a winner!!");
      }
    }
  };
  return (
    <Lead>
      <header>
        <title>The Guessing Game</title>
        <h2>Let's get it started</h2>
      </header>
      <body>
        <Input setGuess={setGuess} />
      </body>
      <button onClick={() => submit(guess)}>take a guess</button>
    </Lead>
  );
}

export default App;
