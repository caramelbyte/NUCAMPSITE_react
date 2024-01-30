import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap'; // Added Container to the import
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => { // Changed {header} to ()
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <Container>
                <NavbarBrand href='/'>
                    <img src={NucampLogo} alt='nucamp logo' />
                </NavbarBrand>
            </Container>
        </Navbar>
    );
}

export default Header;
