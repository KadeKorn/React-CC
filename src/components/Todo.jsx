import './Todo.css'


function Todo({title,}) {
  function deleteTodo() {
    console.log('deleteTodo()', title)
  }
 
    return (
    <div className='Todo'>
        <p>{title}</p>
        <button onClick={deleteTodo}>Delete</button>
    </div>
 )
 }
export default Todo; //this allows me to import it to other things
