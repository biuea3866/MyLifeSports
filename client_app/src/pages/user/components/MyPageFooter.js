import React from 'react';
import { 
    StyleSheet,
    View
} from 'react-native';
import LogoutButton from './LogoutButton';
import palette from '../../../styles/palette';

const MyPageFooter = () => {
    return(
        <View style={ styles.container }>
            <LogoutButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: palette.white[0],
    },
});

export default MyPageFooter;