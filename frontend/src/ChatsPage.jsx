import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'e42358c4-f886-4d83-a48b-a762cc0edd78', 
        props.user.username, 
        props.user.secret
    );
    return(
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    )
  };
  export default ChatsPage;