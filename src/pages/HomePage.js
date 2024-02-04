import React from 'react';
import SubHeader from '../components/SubHeader';
import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';

const HomePage = () => {
    return (
        <Container>
        <SubHeader current= 'Home' />
            <DisplayList />
        </Container>
    );
};

export default HomePage;