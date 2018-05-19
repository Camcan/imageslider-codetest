import React from 'react'
import Styles from './styles.css';
import ImageSlider from '../imageSlider';
import FilmInformation from './filmInformation.js';

class FilmCarousel extends React.Component {
    	constructor(props){
		super(props);
		this.state = {
			index: 0
		};
		this.config = {
			height: this.props.height || "100%",
			width: this.props.width || "100%",
			fontColor: this.props.fontColor || "#FFF",
			foregroundColor: this.props.foregroundColor || "#e8e8e8",
			backgroundColor: this.props.backgroundColor || "#000",
			transitionTime: this.props.transitionTime || 700,
			transitionType: this.props.transitionType || 'fade',
			imageBorderRadiusBR: this.props.imageBorderRadius || 0
		};

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
        		<div className={Styles.container} 
				onClick={()=>this.animate('next', this.props.data)}
				style={{
					height: this.config.height,
					width: this.config.width,
					background: this.config.foregroundColor}}
			>
				
				<div className={Styles.imageSliderContainer} style={{
					borderBottomRightRadius: this.config.imageBorderRadiusBR
				}}>

					<ImageSlider 
						width={"100%"}
						height={"auto"}
						data={this.props.data} 
						index={this.state.index} 
						transitionTime={this.config.transitionTime} 
						transitionType={this.config.transitionType}
						fillColor={this.config.backgroundColor}
					/>
				</div>
				<FilmInformation 
					data={this.props.data}
					config={this.config}
					index={this.state.index} 
					transitionTime={this.config.transitionTime} 
				/>	
			</div>
		);
    	}
};

export default FilmCarousel;
