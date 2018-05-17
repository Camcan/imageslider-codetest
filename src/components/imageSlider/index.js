import React from 'react'
import Styles from './styles.css';

class ImageSlider extends React.Component {
    	constructor(){
		super();
		this.state = {
			index: 0
		}
	}
	renderImages(){
		let i = this.props.data[0];
		return (
			<img src={i.imageurl} title={i.title} />
		)
	}
	render() {
        	return ( 
        		<div className={Styles.container}>
				{this.renderImages()}
			</div>
		);
    	}
};

export default ImageSlider;
