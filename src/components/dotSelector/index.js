import React from 'react'
import Styles from './styles.css';

class DotSelector extends React.Component {
    	constructor(props){
		super(props);
		this.state = {
			index: 0
		}
	}
	componentWillReceiveProps(newProps){
		if (newProps != this.props) {
			this.animate(newProps.index);
		}
	}
	componentDidMount(){
	
	}
	animate(i){
		this.setState({
			index: i
		});
	}
	renderDots(i){
		return this.props.data.map((item, x)=>{
			const fillColor = (x == i) ? 
				this.props.activeColor || "#FFF" 
				: this.props.fillColor || "#EEE";
			const offset = this.props.dotRadius;
			return <div 
					onClick={()=>this.props.toggle(x)}
					id={"dot" + x} 
					className={Styles.dot}
				>
				<svg width={2*offset} height={2*offset}>
  					<circle 
						cx={offset} 
						cy={offset} 
						r={this.props.dotRadius || "5"} 
						strokeWidth="0" 
						fill={fillColor} />
				</svg>
			</div>
		});
	}
	render() { 
		const containerClass = [
			Styles.container,
			this.props.containerClass
		].join(" ")
		return ( 
        		<div className={containerClass}>
				{this.renderDots(this.state.index)}
			</div>
		);
    	}
};

export default DotSelector;
