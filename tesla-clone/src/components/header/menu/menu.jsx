import React from 'react';
import '../menu/menu.scss';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../../../features/carSlice/carSlice';
import { useSelector } from 'react-redux';

const Menu = ({extendedMenuState, sideMenuHandler}) => {
    const cars = useSelector(selectCars)
    console.log(cars)
    return (
        <div className='menu'> 
            <div className='menu__top'>
                <CloseIcon onClick={sideMenuHandler}/>
            </div>
            <ul>
                {cars && cars.map((car, index) => (
                    (extendedMenuState && <li key={index}>{car}</li>)
                ))}
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
                {extendedMenuState && <li>Support</li>}
                {extendedMenuState && <li>Shop</li>}
                {extendedMenuState && <li>Account</li>}
            </ul>
        </div>
    )
}



export default Menu
