import Subtitle from '../../shared/Subtitle/Subtitle';
import './styles.scss'

export default function RecognitionMessage({ recognition }){
    return(
        <div className='RecognitionMessage'>
            <div className='ValueTitle'>
                {recognition.value.title}
            </div>
            <div className='MessageContent'>
                {recognition.message}
            </div>
        </div>
    );

}