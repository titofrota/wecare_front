import React, { Component } from 'react';
import Title from '../../shared/Title/Title'
import './styles.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecognitionCard from '../RecognitionCard/RecognitionCard'


export default function RecognitionsFeed({ recognitions }) {


    return(
        <div>
                    <div className='FeedItems'>
                        <Title phrase="Reconhecimentos da galera"/>
                        {recognitions.map((recognition) => (
                            <>
                                <RecognitionCard key={recognition.id} recognition={recognition} />
                                <hr/>
                            </>
                        ))}
                    </div>
        </div>
    );
}