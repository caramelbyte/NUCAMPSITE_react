import React from 'react';
import SubHeader from '../components/SubHeader';
import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';

const HomePage = () => {
    return (
        <Container>
            <DisplayList />
        </Container>
    );
};

export default HomePage;