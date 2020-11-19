import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  	body {
		font-family: 'Lato', sans-serif;
		margin: 0;
  	}
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Root />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
