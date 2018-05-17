import React from 'react'
import Styles from './styles.css';
import ImageSlider from '../imageSlider';

class FilmCarousel extends React.Component {
    	constructor(){
		super();
		this.state = {
			index: 0
		}
	}
	renderText(i){
		let f = this.props.data[i];
		return (
			<div className={Styles.textOverlay}>
				<div className={Styles.title}>
							
					<a href={f.link}>
						<h2>{f.title}</h2>
					</a>
				</div>
				<div className={Styles.synopsis}>
					<p>{f.synopsis}</p>
				</div>
			</div>
		)
	}
	render() {
        	return ( 
        		<div className={Styles.container}>
				{this.renderText(this.state.index)}	
				<ImageSlider data={this.props.data} index={this.state.index}/>
			</div>
		);
    	}
};

export default FilmCarousel;
