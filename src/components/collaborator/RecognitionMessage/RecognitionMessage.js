import './styles.scss'

export default function RecognitionMessage({ recognition }){
    return(
        <div className='recognitionMessage'>
            <div className='valueTitle'>
                {recognition.value.title}
            </div>
            <div className='messageContent'>
                {recognition.message}
            </div>
        </div>
    );

}