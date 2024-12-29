// This is a component that can be used in App.jsx file
function Header(){

	return(
		// Here within the return statement we can write pure html
		<header>
			<h1>My website</h1>
			<nav>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		</header>
	);
}

// We export this because we want to use it elsewhere 
export default Header