import React,{useState} from 'react';
import './App.scss';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
    const [menuState, setMenuState] = useState(false)

	const sideMenuHandler = () => {
        setMenuState(!menuState)
    }

	return (
		<div className="app">
			<Header menuState={menuState} sideMenuHandler={sideMenuHandler}/>
			<Home menuState={menuState} />
		</div>
	);
}

export default App;
