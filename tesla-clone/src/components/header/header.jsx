import React, {useState} from 'react'
import './header.scss'
import Logo from '../../assets/icons/logo.svg'
import Home from '../home/home'

const Header = () => {
    const [menuState, setMenuState] = useState(false)

    const sideMenu = () => {
        setMenuState(!menuState)
    }
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={Logo} alt="tesla logo" className='header__logo-teslaLogo' />
            </div>
            <div className="header__center">
                <ol>
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Powerwall</li>
                    <li>Charging</li>
                </ol>
            </div>
            <div className="header__right">
                <ol>
                    <li className='toDisappear'>Support</li>
                    <li className='toDisappear'>Shop</li>
                    <li className='toDisappear'>Acccount</li>
                    <li onClick={sideMenu}>Menu</li>
                </ol>
            </div>
            {/* {menuState && <Home/>} */}
        </div>
    )
}

export default Header
