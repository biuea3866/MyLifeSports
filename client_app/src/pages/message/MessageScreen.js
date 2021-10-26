import React from 'react';
import { ScrollView } from 'react-native';
import MessageFragment from './components/MessageFragment';
import MessageHeader from './components/MessageHeader';

const MessageScreen = () => {
    return(
        <ScrollView>
            <MessageHeader />
            <MessageFragment />
        </ScrollView>
    );
};

export default MessageScreen;