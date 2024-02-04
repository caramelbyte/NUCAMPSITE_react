import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    const selectedCampsite = selectRandomCampsite();
    
    return (
        <Container>
            <col sm='5' md = '7'>
            <>CampsitesList</>
            </col>
         
            <col sm= '7' md ='5'> 
            <>CampsiteDetail</>    
            </col>

            <col> 
            
            </col>
        </Container>
    );

};

export default CampsitesDirectoryPage;