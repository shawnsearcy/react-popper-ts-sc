import * as React from "react";
import "./styles.css";
import Tooltip from "./components/Tooltip";

export default function App() {
  const buttonRef = React.useRef(null);
  const [isVisible, setVisibility] = React.useState(true);
  return (
    <div className="App">
      <h1>usePopper + styled-components + typescript</h1>
      <div style={{ position: "relative" }}>
        <button
          ref={buttonRef}
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          olá
        </button>
        <Tooltip isVisible={isVisible} targetRef={buttonRef} />
      </div>
    </div>
  );
}
