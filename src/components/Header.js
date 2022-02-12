import React, {useState} from 'react';
import './Header.css';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    return (
        <div className="container">
            <a href="a">
                <img src="/images/logo.svg" alt="" />
            </a>
            <div className="menu">
                {cars && cars.map((car,index) => (
                    <a key={index} href="as">{car}</a>    
                ))}
            </div>
            <div className="right-menu">
                <a href="asd">shop</a>
                <a href="asd">tesla account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </div>
            <BurgerNav show={burgerStatus}>
                <div className="close-wrapper">
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </div>
                {cars && cars.map((car,index) => (
                    <li key={index}><a href="asd">{car}</a></li>
                ))}
                <li><a href="asd">existing inventory</a></li>
                <li><a href="asd">used inventory</a></li>
                <li><a href="asd">trade-in</a></li>
                <li><a href="asd">cybertruck</a></li>
                <li><a href="asd">roadster</a></li>
                <li><a href="asd">semi</a></li>
                <li><a href="asd">charging</a></li>
            </BurgerNav>
            
        </div>
    )
}

export default Header

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,2);

        a {
            font-weight: 600;
        }
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
