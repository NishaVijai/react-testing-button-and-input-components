import { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import "./styles.css";

export default function App() {
  const [showSection, setShowSection] = useState(false);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonComponent />
      <InputComponent showSection={showSection} />
    </div>
  );
}
