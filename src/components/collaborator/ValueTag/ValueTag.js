import React, { useState, useEffect } from 'react';
import MessageBox from '../MessageBox/MessageBox';
import axios from 'axios';
import './styles.scss'

export default function ValueTag({ receiver_Id, setRecognitions, resetFields }){
    const [values, setValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        axios
        .get('http://localhost:3000/admin/values')
        .then((response) => setValues(response.data));
        // .then((response) => console.log(response.data));
    }, []);

    return(
        <>
            <div className='titleTags'>Em qual valor ele(a) está se destacando?</div>
            <div className='valueTag'>
                {values.map((value) => (     
                        <div className={selectedValue===value.id ? "selectedVal" : "unselectedVal"} key={value.id} value={value} onClick={() => setSelectedValue(value.id)} >
                            {value.title}
                        </div>
                ))}
            </div>
            {selectedValue ? <MessageBox  resetFields={resetFields} setRecognitions={setRecognitions} receiver_Id={receiver_Id} value_Id={selectedValue} /> : "" }
        </>

    );
}