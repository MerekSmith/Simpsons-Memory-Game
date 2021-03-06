import React from "react";
import Images from "./simpsons.json"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Characters from "./components/Characters";

// By extending the React.Component class, Character inherits functionality from it
class App extends React.Component {

	state = {
		characterArray: [],
		score: 0,
		topScore: 0,
		clickedImages: []
	}

	// function that will randomly pull out 12 pictures from the simpsons.json file then put into the array from above.
	randomCharacters = () => {
		let characterArray = [];
		for (let i = 0; characterArray.length < 12; i++) {
			let index = Math.floor(Math.random() * Images.length);
			if (!characterArray.includes(Images[index])) {
				characterArray.push(Images[index]);
			}
		}
		return characterArray;
	};

	componentDidMount() {
		this.setState({ characterArray: this.randomCharacters() })
	}

	handleUnique = (clicked) => {
		let newScore = this.state.score + 1;
		this.setState({
			score: newScore,
			topScore: newScore > this.state.topScore ? newScore : this.state.topScore,
			characterArray: this.randomCharacters(),
			clickImages: this.state.clickedImages.push(clicked)
		})
	}

	handleDuplicate = () => {
		alert("You hit a duplicate! You're score was " + this.state.score)
		this.setState({
			clickedImages: [],
			score: 0,
			characterArray: this.randomCharacters()
		})
	}

	handleClick = (clicked) => {
		console.log(clicked)
		console.log(this.state.clickedImages.includes(clicked))
		this.state.clickedImages.includes(clicked) ? this.handleDuplicate() : this.handleUnique(clicked);
	}



	render() {
		return (
			<div className="container-fluid">
				<Navbar
					score={this.state.score}
					topScore={this.state.topScore}
				/>
				<Header />
				<Characters
					charactersArray={this.state.characterArray}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}

export default App;
