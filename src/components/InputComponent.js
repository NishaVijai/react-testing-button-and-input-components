import { useState } from "react";

export default function InputComponent({ showSection }) {
  const [userInput, setUserInput] = useState("");

  const inputOnChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <section>
      <br />
      <label>
        <input
          data-testid="inputField"
          type="text"
          placeholder="Type text..."
          onChange={inputOnChangeHandler}
        />
      </label>

      {userInput.length > 0 && <p> You've typed: {userInput} </p>}

      <span data-testid="displayInputText">{userInput}</span>

      {showSection && (
        <p data-testid="pElementWeWantToShow">showSection test</p>
      )}
    </section>
  );
}
