import React, {useState} from 'react';
import {useChatStyles} from '.';
import {
    Paper,
    InputBase,
    Box,
    IconButton,
    Divider,
    Stack,
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import {useAppDispatch} from '../../redux/hooks';
import {sendMessage} from '../../features/socket';

const useStyleMessage = makeStyles({
    message: {
        marginTop: '.7em',
        marginRight: '1em',
        fontSize: '1em',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    box: {
        backgroundColor: '#3e8aa9',
        padding: '.6em',
        borderRadius: '100px'
    }
});

const Message = ({children}: any) => {
    const styles = useStyleMessage();
    return <div className={styles.message}>
        <div className={styles.box}>
            {children}
        </div>
    </div>;
};

type ChatProps = {
    channelName: string;
};

export const Chat = ({channelName}: ChatProps) => {
    const dispatch = useAppDispatch();
    const styles = useChatStyles();
    const [inputMessage, setInputMessage] = useState<string>('');
    const [tempMessages, setTempMessages] = useState<Array<string>>([]);

    const handleChangeInputMessage = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setInputMessage(event.target.value);
    };

    const handleSendMessage = (event: any) => {
        event.preventDefault();
        dispatch(sendMessage(inputMessage));
        setTempMessages([...tempMessages, inputMessage]);
        setInputMessage('');
    };

    return (
        <div className={styles.root}>
            <div className={styles.messages}>
                <Message>Welcome to the {channelName}</Message>
                {tempMessages.map(msg => <Message>{msg}</Message>)}
            </div>
            <form className={styles.input} onSubmit={handleSendMessage}>
                <InputBase
                    sx={{ml: 1, flex: 1, color: 'black'}}
                    placeholder='Send new message!'
                    onChange={handleChangeInputMessage}
                    value={inputMessage}
                    color='secondary'
                />
                <Divider sx={{height: 28, m: 0.5}} orientation='vertical'/>
                <IconButton
                    color='primary'
                    sx={{p: '10px'}}
                    aria-label='directions'
                    type='submit'
                >
                    <SendIcon/>
                </IconButton>
            </form>
        </div>
    );
};
