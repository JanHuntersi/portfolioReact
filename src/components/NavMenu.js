import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavMenu() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Domov</NavLink>
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
        </div>
    );
}