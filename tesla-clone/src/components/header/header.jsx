import React, {useState, useEffect} from 'react'
import './header.scss'
import Logo from '../../assets/icons/logo.svg'
import Menu from './menu/menu.jsx';
import { selectCars } from '../../features/carSlice/carSlice';

const Header = ({menuState, sideMenuHandler}) => {
    const [extendedMenuState, setExtendedMenuState] = useState(window.innerWidth>1200? false: true)


    const vpWidthChecker = () => {
        // console.log(window.innerWidth)
        if(window.innerWidth>1200){
            setExtendedMenuState(false)
        }else if(window.innerWidth<1200){
            setExtendedMenuState(true)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize',
        vpWidthChecker)
        return () => {
            window.removeEventListener('resize',
            vpWidthChecker)
        }
    }, [window.innerWidth])

    return (
        <div className='header'>
            {menuState && <Menu sideMenuHandler={sideMenuHandler} extendedMenuState={extendedMenuState}/>}
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
                    <li onClick={sideMenuHandler} className={extendedMenuState && "backgroundBlurred"}>Menu</li>
                </ol>
            </div>
        </div>
    )
}

export default Header
