import React, { Component } from 'react';
import Title from '../../shared/Title/Title'
import './styles.scss'

class Search extends Component {

    
    render() {
        return (
                <div className='SearchItems'>
                    <Title phrase="Quem está mandando bem?"/>
                </div>
        );
    }
}

export default Search;