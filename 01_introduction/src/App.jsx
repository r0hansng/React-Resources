import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

// As we can only export on ly one component in React at time we use JSX fragments
function App() {

	return(
		<>
			<Header />
			<Food />
			<Footer />
		</>
	)
}

export default App