import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import Search from '../components/collaborator/Search/Search'
import RecognitionsFeed from '../components/collaborator/RecognitionsFeed/RecognitionsFeed'
import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {
    const [recognitions, setRecognitions] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/v1/recognitions')
            .then((response) => console.log(response.data));
    });

    return (
        <div>
            <Navbar/>
            <Container>
              <Row className="justify-content-sm-center">
                <Col lg="7">
                    <Search/>
                    < RecognitionsFeed />
                </Col>
              </Row>
            </Container>
        </div>
    );
}



// const Home = () => {

//     return(
//         <>
//             <Navbar/>
//             <Search/>
//             <Search/>
//             <RecognitionsFeed/>
//         </>
//     );
// };

// export default Home;