import React from 'react';
import { 
    ScrollView, 
    StyleSheet 
} from 'react-native';
import MyPageHeader from './components/MyPageHeader';
import MyPageContent from './components/MyPageContent';
import MyPageFooter from './components/MyPageFooter';
import palette from '../../styles/palette';

const MyPageScreen = () => {
    return(
        <ScrollView style={ styles.container }>
            <MyPageHeader />
            <MyPageContent />
            <MyPageFooter />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: palette.white[0],
    },
});

export default MyPageScreen;