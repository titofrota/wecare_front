import Subtitle from '../../shared/Subtitle/Subtitle';
import RecognitionMessage from '../RecognitionMessage/RecognitionMessage';
import { UserOutlined, LikeOutlined, CommentOutlined, SendOutlined  } from '@ant-design/icons';
import { Avatar }  from 'antd';
import { InputGroup, FormControl }  from 'react-bootstrap'
import './styles.scss'

export default function RecognitionCard({ recognition }) {
    return(
        <div className='RecognitionCard'>
                <>
                    <div className='Information'>
                    <Avatar className='UserAvatar' size={50} icon={<UserOutlined />} />
                        <div className='Text'>
                            <Subtitle
                                receiver={recognition.receiver.name}
                                sender={recognition.sender.name}
                                phrase='foi reconhecid@ por'
                            />
                            <p className='Timestamp'>há algum tempo</p>
                        </div>
                    </div>
                        <RecognitionMessage recognition={recognition} />
                    <div className='Interactions'>
                        <LikeOutlined style={{ marginRight: '2vh' }} />    
                        <CommentOutlined style={{ marginRight: '2vh' }} />
                        <div className='Comment'>
                          <InputGroup className="mb-3" style={{ marginTop: '2vh' }}>
                            <FormControl
                                placeholder="Seja o primeiro a comentar!"
                                aria-label="Comment"
                                aria-describedby="inputGroup-sizing-default"
                            />
                          </InputGroup>
                          <SendOutlined style={{ marginLeft: '2vh', alignSelf: 'center'}}/>
                        </div>
                    </div>
                </>
        </div>
    );
}