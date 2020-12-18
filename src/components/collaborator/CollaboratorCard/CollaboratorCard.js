import './styles.scss'

export default function CollaboratorCard({ person, onClick, className }){
    return (
        <div onClick={onClick} className={`collaboratorCard ${className}`}>
            <div className='personName'>
                {person.name}
            </div>
            <div className='personPosition'>
                {person.position.title}
            </div>
        </div>
    );
}