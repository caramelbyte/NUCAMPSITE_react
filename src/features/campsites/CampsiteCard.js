import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite;

    return (
        // Wrap Card component in Link component
        <Link to={`/${id}`}>
            <Card>
                <CardImg
                    width="100%"
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

CampsiteCard.propTypes = {
    campsite: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default CampsiteCard;
