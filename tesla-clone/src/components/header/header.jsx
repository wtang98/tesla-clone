import React, {useState, useEffect} from 'react'
import './header.scss'
import Logo from '../../assets/icons/logo.svg'
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [menuState, setMenuState] = useState(false)
    const [extendedMenuState, setExtendedMenuState] = useState(true)

    const viewportWidth = window.innerWidth;
    console.log(viewportWidth)
    console.log(extendedMenuState)

    const vpWidthChecker = () => {
        if(viewportWidth>1200){
            setExtendedMenuState(false)
        }
    }
    
    const Menu = () => {
        return (
            <div className='menu'> 
                <div className='menu__top'>
                    <CloseIcon onClick={sideMenu}/>
                </div>
                <ul>
                    {extendedMenuState && <li>Model S</li>}
                    {extendedMenuState && <li>Model 3</li>}
                    {extendedMenuState && <li>Model X</li>}
                    {extendedMenuState && <li>Model Y</li>}
                    <li>Existing Inventory</li>
                    <li>Used Inventory</li>
                    <li>Trade-In</li>
                    <li>Test Drive</li>
                    <li>Fleet and Business</li>
                    <li>Powerwall</li>
                    <li>Energy</li>
                    <li>Commercial Energy</li>
                    <li>Utilities</li>
                    <li>Charging</li>
                    <li>Find Us</li>
                    <li>Support</li>
                    <li>Investor Relations</li>
                    <li>Account</li>
                    <div></div>
                </ul>
            </div>
        )
    }

    const sideMenu = () => {
        setMenuState(!menuState)
    }

    useEffect(vpWidthChecker, [viewportWidth])
    return (
        <div className='header'>
            {menuState && <Menu/>}
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
        </div>
    )
}

export default Header
