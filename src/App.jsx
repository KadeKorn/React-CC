import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div className="Todo__wrapper">
        <Todo 
        title="Finish Frontend Simplifed"
        paragraph="Code along with Frontend Simplified Step by step"
        />
        <Todo 
        title="Finish Interview Section"
        paragraph="I am happy ot be coding and preping for interviews"
        />
        <Todo 
        title="Land a 100k Job" 
        paragraph="Already there, but I want to double it"
        />
      </div>
      <Modal
      title="Are you sure?"
      />
    </div>
  );
}

export default App;
