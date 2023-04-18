import { useState } from "react";

export default function ButtonComponent() {
  const [showAnotherButton, setShowAnotherButton] = useState(false);

  const buttonOnClickHandler = () => {
    setShowAnotherButton((prev) => !prev);
  };

  return (
    <section>
      <button data-testid="button" onClick={buttonOnClickHandler}>
        {!showAnotherButton
          ? "Click to see Another button"
          : "Hide Another button"}
      </button>

      <br />
      <br />

      {showAnotherButton && (
        <button data-testid="button">Another Button</button>
      )}
    </section>
  );
}
