import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
	return (
		<div className="app">
			<Header/>
			<Home/>
		</div>
	);
}

export default App;
