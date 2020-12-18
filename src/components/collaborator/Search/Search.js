import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl }  from 'react-bootstrap'
import { SearchOutlined  } from '@ant-design/icons';
import Title from '../../shared/Title/Title';
import CollaboratorCard from '../CollaboratorCard/CollaboratorCard';
import ValueTag from '../ValueTag/ValueTag';
import RecognitionSuccess from '../RecognitionSuccess/RecognitionSuccess'

import './styles.scss';
import axios from 'axios';

export default function Search({ setRecognitions }) {
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [notification, setNotification] = useState("");
    const [text, setText] = useState("");
    const handleChange = event => {
        const results = users.filter(user => 
            user.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(results);
        setNotification(false);
        setText(event.target.value);
        // console.log(results)
    };

    const [selectedReceiver, setSelectedReceiver] = useState("");


    useEffect(() => {
        axios
        .get('http://localhost:3000/v1/users')
        .then((response) => setUsers(response.data));
        // .then((response) => console.log(response.data));
    }, []);

    const resetFields = () => {
        setSearchResults([]);
        setSelectedReceiver("");
        setNotification(true);
        setText("");
        console.log('vai pfv');
    }


    return (
        <div className='SearchItems'>
            <Title phrase="Quem está mandando bem?"/>
            <div className='SearchInput'>
                <InputGroup className="mb-3" style={{ marginTop: '2vh' }}>
                    <SearchOutlined style={{ marginRight: '2vh', alignSelf: 'center', fontSize: '20pt' }} />
                    <FormControl
                        type="text"
                        value={text}
                        placeholder="Pesquise o nome de algum colega..."
                        onChange={handleChange}
                        aria-label="Search"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                {notification? <RecognitionSuccess/> : undefined}
                    <ul>
                        {searchResults.map(person => (
                            // <li key={person.id}>{person.name}</li>
                            <CollaboratorCard className={selectedReceiver===person.id ? "selectedCol" : ""} key={person.id} person={person} onClick={() => setSelectedReceiver(person.id)} />
                        ))}
                        {selectedReceiver ? <ValueTag resetFields={resetFields} setRecognitions={setRecognitions} receiver_Id={selectedReceiver}/> : "" }
                    </ul>
            </div>
        </div>
    );
}