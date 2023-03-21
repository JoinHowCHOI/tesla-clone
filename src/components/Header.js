import React from "react"
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../features/car/carSlice";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="#none;">
                <img src="/images/logo.svg" alt="" /> 
            </a>
            <Menu>
                {
                    cars &&
                    cars.map((car, index) =>(
                        <a key={index} href="#none">{car}</a>
                    ))
                }
            </Menu>
            <RightMenu>
                <a href="#none;">Shop</a>
                <a href="#none;">TeslaAccount</a>
                <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWarpper><CustomClose onClick={() => setBurgerStatus(!burgerStatus)} /></CloseWarpper>
                <li><a href="#none;">Existing Inventory</a></li>
                <li><a href="#none;">Used Inventory</a></li>
                <li><a href="#none;">Trade-in</a></li>
                {
                    cars &&
                    cars.map((car, index) =>(
                        <li><a key={index} href="#none">{car}</a></li>
                    ))
                }
            </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    justify-content: space-between;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right 0;
    z-index: 1;
    img {
        max-width:30px
    }
    * {
        color: #fff;
    }
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    @media (max-width: 768px) {
      display: none;
    }
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding:0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 4;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.2s ease-in;
    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      a {
        font-weight: 600;
        color: #777;
      }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    * {
        color: #777;
    }
`;

const CloseWarpper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Header