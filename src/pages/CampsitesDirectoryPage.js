import React from 'react';
import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;