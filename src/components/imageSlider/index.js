import React from 'react'
import Styles from './styles.css';

class ImageSlider extends React.Component {
    	constructor(props){
		super(props);
		this.state = {
			index: 0
		}
		this.updateDimensions = this.updateDimensions.bind(this);
	}
	componentWillReceiveProps(newProps){
		if (newProps != this.props) {
			this.animate(newProps.index);
		}
	}
	componentDidMount(){
		let containerWidth = document.getElementsByClassName(Styles.container)[0].offsetWidth;
		this.setState({
			index: this.state.index,
			containerWidth: containerWidth
		})
		 window.addEventListener("resize", this.updateDimensions);	
	}
	componentWillUnmount(){
		window.removeEventListener("resize", this.updateDimensions)
	}
	updateDimensions(){
		this.animate(this.state.index);
		this.componentDidMount();
	}
	animate(i){
		this.setState({transition:true})
		let containerWidth = document.getElementsByClassName(Styles.container)[0].offsetWidth;
		setTimeout(()=>this.setState({
			index: i,
			offset: i*this.state.containerWidth,
			transition: false
		}), this.props.transitionTime || 700);
	}
	renderImages(){
		return this.props.data.map((i)=>{
			return <div className={Styles.img} style={{
				width: this.state.containerWidth + "px"
			}}>
				<img src={i.imageurl} title={i.title}/>
			</div>
		});
	}
	render() { 
		const imageRow = {
			class: [
				Styles.images, 
				(this.state.transition) ? Styles.animate : "",
				(this.props.transitionType) ? Styles[this.props.transitionType] : ""
			].join(" "),
			styles: {
				width: this.state.containerWidth*this.props.data.length + "px", 
				right: this.state.offset + "px"
			}
		};
		const containerStyles = {
			background: this.props.fillColor || "#FFF",
			width: this.props.width || "100%", 
			height: this.props.height || "100%",
			...this.props.containerStyles
		};
		return ( 
        		<div className={Styles.container} style={containerStyles}>
				<div className={imageRow.class} style={imageRow.styles}>
					{this.renderImages()}
				</div>
			</div>
		);
    	}
};

export default ImageSlider;
