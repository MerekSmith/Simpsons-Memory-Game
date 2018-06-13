import React from "react";
import Images from "../simpsons.json"
import '../index.css';

let characterArray = [];
function randomCharacters() {
	for (let i = 0; characterArray.length < 12; i++) {
		let index = Math.floor(Math.random() * Images.length);
		console.log(index);
		if(!characterArray.includes(Images[index])) {
			characterArray.push(Images[index]);
		}
	}
	console.log(characterArray);
};

randomCharacters()

const Characters = () => (
  <div className="character">
    <div className="character-header">
      <h3 className="character-title">Non eu sit duis adipisicing esse incididunt ad proident.</h3>
    </div>
    <div className="character-body">
		{characterArray.map((image, index) => {
				return <div className="imageContainer" key={ index } ><img className="images" src={ image.image } alt={ image.name }/></div>;
			})}
    </div>
  </div>
);

export default Characters;
