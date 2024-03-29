import Moment from 'react-moment'
import {useRef ,useEffect} from 'react'

const Message = ({msg, user1}) => {
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    },[msg])
    return ( <div className={`message-wrapper ${msg.from === user1 ? 'own': ''}`} ref={scrollRef}>
        <p className={msg.from === user1 ? 'me': 'friend'}>
            {msg.media? <img src={msg.media} alt={msg.text} />: null}
            {msg.text}
            <br />
            <small>
                <Moment fromNow={msg.createdAt.toDate()}/>
            </small>
        </p>
    </div> );
}
 
export default Message;