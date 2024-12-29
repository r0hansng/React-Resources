// updater function = A function as an argument to setState() usually ex. setYear(arrow function) 
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions.
// Good practice to use updater functions

import Counter from './Counter.jsx'

function App() {

  return (
    <>
      <Counter />
    </>
  )
}

export default App
