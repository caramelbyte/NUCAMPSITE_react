import React from 'react';
import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
// Import the selectFeaturedPartner function
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    // Append a call to selectFeaturedPartner() in the items list
    const items = [
        selectFeaturedCampsite(),
        selectFeaturedPromotion(),
        selectFeaturedPartner(), // Added call to selectFeaturedPartner()
    ];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;
