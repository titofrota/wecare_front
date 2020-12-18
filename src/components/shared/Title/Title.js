import React, { Component } from 'react';
import './styles.scss'

export default function Title(props) {
    const { phrase } = props;
        return (
            <div className='Title'>
                {props.phrase}
            </div>
        );
}
