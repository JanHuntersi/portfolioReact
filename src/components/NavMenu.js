import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md'

const NavMenuBody= styled.div`
background-color: black;
color:white;
width:100%;
position:fixed;
top:0;
left:0px;


.mobile-menu-icon-close{
    display:none;
}

.navItems{
    display:flex;
    justify-content:space-between;
    max-width:1200px;
    min-width:400px;
    width:50%;

}
hide-navItems{
    display:none;
    }
.active{
    border-bottom: 3px solid white;
}
    a:hover{
      border-bottom: 3px solid var(--blue1);
    }
}

 li a{
    display-inline:block;
   padding 7px;
    }

    .mobile-menu-icon{
        display:none;
    }

    @media only screen and (min-width: 768px){
    height: calculate(var(--headerHeight)+1rem);
}


@media only screen and (max-width: 768px){

    .mobile-menu-icon,.mobile-menu-icon-close{
        font-size:2rem;
        cursor:pointer;
    } 
    
.mobile-menu-icon{
    display: fixed;
    top:50px;
    z-index: 300;
}
.mobile-menu-icon-close{
    display: none;
}
li a{color: white;}
.active{
    border-bottom: 3px solid black;
}
.navItems{
    position: absolute;
    right: 0px;
    height: 90vh;
    top:3rem;   
    width: 70vw;
    color: var(--second);
    background-color: black;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateX(0%);
    font-size:2rem;
    transition: transform 0.5s ease-in;
    z-index: 2;

}
.hide-navItems{
    position: absolute;
    right: 0px;
    height: 90vh;
    top:3rem;   
    width: 70vw;
    color: balck;
    background-color: black;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateX(100%);
    font-size:2rem;
    transition: transform 0.5s ease-in;
    z-index: 2;
    li a{
        color:black;
        border:none;
    }
}



`;

const Nav= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-left:5rem;
margin-right:5rem;
font-size:1.3rem;
font-weight:600;
height:3rem;
z-index:400;

`;


export default function NavMenu() {
    const[showNav, SetShowNav] = useState(false);
    return (

        <NavMenuBody>
            
            <Nav>
                <div>SLO | EN</div>
                <div className={showNav ? 'mobile-menu-icon':'mobile-menu-icon-close' }
                 onClick={()=> SetShowNav(!showNav)}
                 role="button"
                 onKeyDown={()=> SetShowNav(!showNav)}>
                <MdMenu />
            </div>
            <div div className={!showNav ? 'mobile-menu-icon':'mobile-menu-icon-close'}
            onClick={()=> SetShowNav(!showNav)}
            role="button"
            onKeyDown={()=> SetShowNav(!showNav)}>
            <MdClose />
            </div>
            
                <ul className={!showNav ? 'navItems' : 'hide-navItems'}>
                <li>
                    <NavLink to="/" exact>Domov</NavLink>
                </li>
                <li>
                    <NavLink to="/about">O meni</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projekti</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Kontakt</NavLink>
                </li>
                </ul>
            </Nav>
        </NavMenuBody>
    );
}