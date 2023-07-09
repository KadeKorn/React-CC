import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";


function App() {
  let isModalOpen = false;

  function toggleModal() {
    isModalOpen = !isModalOpen;
    console.log(isModalOpen);
  }

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
        <button onClick={toggleModal} >Add todo</button>
      </div>
      <div className="Todo__wrapper">
        <Todo title="Finish Frontend Simplifed" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a 100k Job" />
      </div>
      {isModalOpen ? <Modal title="Confirm Delete?" /> : <></>}
      {/*short hand is isModalOpen && <Modal title="confirm delete" /> */}
    </div>
  );
}

export default App;
