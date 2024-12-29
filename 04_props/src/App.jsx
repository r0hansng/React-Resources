// props = read-only properties that are shared between components. 
//         A parent component can send data to a child component.
//         <Component key=value />

import Student from './Student.jsx'

function App() {
  return(
    <>
    {/* Whenever we write a key value pair in a component it is sent to the props object that is passed in the component */}
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student />
    </>
  )
}

export default App
