import './styles.scss'

export default function Subtitle(props) {
    const { phrase, sender, receiver } = props;
        return (
            <div className='Subtitle'>
                {` ${props.receiver} ${props.phrase} ${props.sender}`}
            </div>
        );
}
