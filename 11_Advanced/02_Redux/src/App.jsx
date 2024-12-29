// Redux make a copy of the state and then makes changes to that object then the changes are overwritten to the original state.

// Store is like a global state which will be accessible to any given component in the application. 

// Action : In case of the a counter there will be an ACTION to increase and decrease the counter. It has two parameters a type: "" and a payload: ""

// Reducers help in making the changes in the state in the STORE

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
