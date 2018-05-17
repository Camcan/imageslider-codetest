import React from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'

import Styles from './base.css';

class App extends React.Component {
    render() {
        return ( 
        	<div id="app" className={Styles.app}>
			HELLO WORLD
		</div>
	);
    }
};
ReactDOM.render( 
	<App />,
	document.getElementById('root')
);
