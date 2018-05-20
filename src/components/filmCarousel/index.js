import React from 'react'
import Styles from './styles.css';
import ImageSlider from '../imageSlider';
import FilmInformation from './filmInformation.js';
import DotSelector from '../dotSelector';

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
		this.animate = this.animate.bind(this);

	}
	animate(i){
		if ((-1 < i) && (i < this.props.data.length) && (i !== this.state.index)){
			this.setState({
				index: i
			});
		};
	}
	render() {
		return ( 
        		<div className={Styles.container} 
				style={{
					height: this.config.height,
					width: this.config.width,
					background: this.config.foregroundColor
				}}
			>
				
				<div className={Styles.imageSliderContainer} style={{
					borderBottomRightRadius: this.config.imageBorderRadiusBR
				}}>
	
					<ImageSlider 
						width={"100%"}
						height={"100%"}
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
				<DotSelector containerClass={Styles.dotSelector}
						toggle={(i)=>this.animate(i)}
						fillColor={"#FFF"} 
						activeColor={"#000"} 
						dotRadius={5}
						data={this.props.data}
						index={this.state.index}
				/>	
			</div>
		);
    	}
};

export default FilmCarousel;
