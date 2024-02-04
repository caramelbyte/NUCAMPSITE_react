import React from 'react';

function Partner({ partner }) {
    if (partner) {
        // Further destructuring the properties of the partner object
        const { image, name, description } = partner;

        return (
            <>
                <img src={image} alt={name} style={{ width: '150px' }} />
                <div className='m-4'>
                    <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        );
    }

    // If partner is falsy, return null to prevent rendering
    return null;
}

export default Partner;

