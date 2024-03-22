import { useRef } from "react";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  const nodeRef = useRef(null);
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-blue-100"
      id="drag-holder"
    >
      <Draggable bounds="parent" nodeRef={nodeRef}>
        <h2 className="bg-blue-300 w-fit" ref={nodeRef}>
          DRAGGABLE HEADER
        </h2>
      </Draggable>
    </div>
  );
}

export default App;
