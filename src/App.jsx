import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";
// import Counter from "./components/Counter";
function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log("onTododelete()");
  }
  function modalCancel() {
    setShowModal(false);
    console.log("ModalCancel");
  }
  function modalConfirm() {
    setShowModal(false);
    console.log("ModalConfirm");
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
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="Todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplifed" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a 100k Job" />
      </div>
      {showModal ? (
        <Modal
          modalCancel={modalCancel}
          modalConfirm={modalConfirm}
          title="Confirm Delete?"
        />
      ) : (
        <></>
      )}
      {/*short hand is isModalOpen && <Modal title="confirm delete" /> */}
    </div>
  );
}

export default App;
