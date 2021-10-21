import React from 'react';
import { 
    StyleSheet, 
    ScrollView,
} from 'react-native';
import WriteNav from './components/WriteNav';
import palette from '../../styles/palette';
import WriteContent from './components/WriteContent';
import WriteFooter from './components/WriteFooter';

const PostWriteScreen = () => {
    return(
        <ScrollView style={ styles.container }>   
            <WriteNav />
            <WriteContent />
            <WriteFooter />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0]
    },
});

export default PostWriteScreen;