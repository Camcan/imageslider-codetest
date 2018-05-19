import React from 'react'
import Styles from './styles.css';

class FilmCarousel extends React.Component {
    	constructor(props){
		super(props);
		this.state = {
			index: 0,
			hide: true
		}
		this.renderText = this.renderText.bind(this);
	}
	componentWillReceiveProps(newProps){
		if (newProps != this.props){
			this.renderText(newProps.index);
		}
	}
	renderText(i){
		this.setState({hide: true});
			
		setTimeout(()=>this.setState({
			index: i,
			hide: false
		}), this.props.transitionTime || 500);

	}
	render() {
        	const f = this.props.data[this.state.index];
		let overlayStyles = [
			Styles.textOverlay,
			(this.state.hide) ? Styles.hide : ""
		].join(" ");

		return (
			<div className={overlayStyles}>
				<div className={Styles.titleInfo}>
					<a href={"http://" + f.link}>
											<h2>{f.title}</h2>
					</a>
				</div>
				<div className={Styles.brief}
					style={{background: this.props.config.foregroundColor}}
				>
					<p>{f.synopsis}</p>
				</div>
			</div>
		);
    	}
};

export default FilmCarousel;
