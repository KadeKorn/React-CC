import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div className="Todo__wrapper">
        <Todo />
        <Todo />
        <Todo></Todo>
      </div>
      <Modal />
    </div>
  );
}

export default App;
