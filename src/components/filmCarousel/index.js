import React from 'react'
import Styles from './styles.css';
import ImageSlider from '../imageSlider';
import FilmInformation from './filmInformation.js';

class FilmCarousel extends React.Component {
    	constructor(){
		super();
		this.state = {
			index: 0
		}
	}
	animate(direction, arr){
		let newIndex = this.state.index;
		switch(direction){
				case 'next': newIndex++
					break
				case 'prev': newIndex--
					break
		};
		if ((-1 < newIndex && newIndex < arr.length)){
			console.log("newIndex:", newIndex)
			this.setState({
				index: newIndex
			});
		};
		console.log("Animating:", direction)
	}
	render() {
        	return ( 
        		<div className={Styles.container} onClick={()=>this.animate('next', this.props.data)}>
				<FilmInformation 
					data={this.props.data} 
					index={this.state.index} 
					transitionTime={3000} 
				/>
				<ImageSlider 
					data={this.props.data} 
					index={this.state.index} 
					transitionTime={700} 
					transitionType={'fade'}
				/>
			</div>
		);
    	}
};

export default FilmCarousel;
