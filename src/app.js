import React from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'

import Styles from './base.css';
import FilmCarousel from './components/filmCarousel';
import Data from '../data/data.json';

const CarouselData = Data.carousel;

class App extends React.Component {
    render() {
        return ( 
        	<div id="app" className={Styles.app}>
			<div className={Styles.banner}>
				<FilmCarousel 
					data={CarouselData} 
					width={"100%"}
					height={"100%"}
					imageBorderRadius={"100px"}
					transitionTime={700}
					backgroundColor={"#000"}
					foregroundColor={"linear-gradient(to right, #770011, #DC143C)"}
					fontColor={"#FFF"}
				/>
			</div>
		</div>
	);
    }
};

ReactDOM.render( 
	<App />,
	document.getElementById('root')
);
