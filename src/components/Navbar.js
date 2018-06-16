import React from "react";
import '../index.css';


const Navbar = (props) => (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<span>
					<a className="navbar-brand " href="/index">
						Simpsons Memory Game
		</a>
				</span>

				<span className="navbar-brand mb-0 h1">Click an image to begin!</span>

				<span className="navbar-brand mb-0 h1">Score: {props.score} | Top Score: {props.topScore}</span>

			</nav>
		)

export default Navbar;
