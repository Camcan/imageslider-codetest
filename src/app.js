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
			<FilmCarousel data={CarouselData} />
		</div>
	);
    }
};

ReactDOM.render( 
	<App />,
	document.getElementById('root')
);
