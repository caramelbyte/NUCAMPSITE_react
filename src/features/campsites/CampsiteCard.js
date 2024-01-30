import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({ campsite }) => {
    return (
        <Card>
            <CardImg
                width="100%"
                src={campsite.image}
                alt={campsite.name}
            />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

CampsiteCard.propTypes = {
    campsite: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};

export default CampsiteCard;
