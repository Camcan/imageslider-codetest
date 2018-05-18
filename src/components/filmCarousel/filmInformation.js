import React from 'react'
import Styles from './styles.css';

class FilmCarousel extends React.Component {
    	constructor(){
		super();
		this.state = {
			index: 0
		}
	}
	componentWillReceiveProps(newProps){
		if (newProps != this.props){
			this.renderText(newProps.index);
		}
	}
	renderText(i){
		this.setState({hide: true});
		setTimeout(this.setState({
			index: i,
			hide: false
		}), 1500);
	}
	render() {
        	let f = this.props.data[this.props.index];
		let overlayStyles = Styles.textOverlay;
		overlayStyles += (this.state.hide) ? " " + Styles.hide : "";
		return (
			<div className={overlayStyles}>
				<div className={Styles.title}>
							
					<a href={"http://" + f.link}>
						<h2>{f.title}</h2>
					</a>
				</div>
				<div className={Styles.synopsis}>
					<p>{f.synopsis}</p>
				</div>
			</div>
		);
    	}
};

export default FilmCarousel;
