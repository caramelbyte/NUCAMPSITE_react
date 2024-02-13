import React from 'react';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCampsiteById } from '../../features/campsites/campsitesSlice';
import CampsiteDetail from '../../features/campsites/CampsiteDetail';
import CommentsList from '../../features/comments/CommentsList';
import SubHeader from '../../components/SubHeader';


const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    // Use useSelector to access Redux state
    const campsite = useSelector(state => selectCampsiteById(state, campsiteId));

    return (
        <Container>
            <SubHeader current={campsite?.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;
