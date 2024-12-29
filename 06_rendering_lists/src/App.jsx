import List from './List.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}]
 
  const vegetables = [{id: 6, name: "broccoli", calories: 125}, 
                      {id: 7, name: "carrot", calories: 65}, 
                      {id: 8, name: "spinach", calories: 40}, 
                      {id: 9, name: "asparagus", calories: 75}]

  return(
    <>
      {fruits.length > 0} ? <List items={fruits} category="Fruits" /> : null
      {vegetables.length > 0} ? <List items={vegetables} category="Vegetables" /> : null
    </>
  )
}

export default App
