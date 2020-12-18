import React, { useState } from 'react';
import { InputGroup, FormControl }  from 'react-bootstrap'
import './styles.scss'
import { createRecognition } from '../../../services/Api'

export default function MessageBox({ receiver_Id, value_Id, setRecognitions, resetFields }) {
    const [selectedMessage, setSelectedMessage] = useState("");
    const [sender, setSender] = useState("1");

    const sendRecognition = event => {
        event.preventDefault();
        createRecognition(sender, receiver_Id, selectedMessage, value_Id)
        .then(res =>{
            console.log(res.data);
            setRecognitions(r => [res.data,...r]);
            setSelectedMessage("");
            resetFields();
        })
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={sendRecognition}>
            <div className='titleMessage'>Deixe uma mensagem</div>
            <div className='messageBox'>
                <InputGroup size="lg" style={{ marginBottom: '3vh' }}>
                    <FormControl 
                    type="text"
                    onChange={e => setSelectedMessage(e.target.value)}
                    as="textarea" 
                    aria-label="With textarea" />
                </InputGroup>
                <button className='sendButton' type='submit'>
                    Reconhecer
                </button>
            </div>
        </form>
    );
}

