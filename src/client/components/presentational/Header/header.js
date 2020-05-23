import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './header.style';

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/rick-morty">Rick Morty</Link>
        </HeaderWrapper>
    );
}

export default Header;