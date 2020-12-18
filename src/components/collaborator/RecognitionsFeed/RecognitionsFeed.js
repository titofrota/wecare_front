import React, { Component } from 'react';
import Title from '../../shared/Title/Title'
import './styles.scss'
import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecognitionCard from '../RecognitionCard/RecognitionCard'


export default function RecognitionsFeed() {
    const [recognitions, setRecognitions] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/v1/recognitions')
            .then((response) => setRecognitions(response.data))
            // .then((response) => console.log(response.data));
    }, []);

    return(
        <div>
                    <div className='FeedItems'>
                        <Title phrase="Reconhecimentos da galera"/>
                        {recognitions.map((recognition) => (
                            <>
                                <RecognitionCard recognition={recognition} />
                                <hr/>
                            </>
                        ))}
                    </div>
        </div>
    );
}