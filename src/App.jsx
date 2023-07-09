import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <Counter />
      <div className="Todo__wrapper">
        <Todo title="Finish Frontend Simplifed" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a 100k Job" />
      </div>
      {showModal ? <Modal title="Confirm Delete?" /> : <></>}
      {/*short hand is isModalOpen && <Modal title="confirm delete" /> */}
      
    </div>
  );
}

export default App;
