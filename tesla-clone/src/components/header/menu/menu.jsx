import React,{useEffect} from 'react'
import './menu.scss'
import CloseIcon from '@material-ui/icons/Close';

const Menu = ({extendedMenuState, sideMenuHandler}) => {

    return (
        <div className='menu'> 
            <div className='menu__top'>
                <CloseIcon onClick={sideMenuHandler}/>
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



export default Menu
