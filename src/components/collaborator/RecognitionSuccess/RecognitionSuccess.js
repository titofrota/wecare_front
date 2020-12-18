import './styles.scss'

export default function RecognitionSuccess({ }) {
    return (
        <div className='successCard'>
            <p className='Title' style={{color: 'white'}} >
                Você fez o dia del@ mais feliz!
            </p>
            <p className='Subtitle' style={{color: 'white', alignItems: 'center'}}>
                Continue reconhecendo os seus colegas!
            </p>
        </div>
    );
}