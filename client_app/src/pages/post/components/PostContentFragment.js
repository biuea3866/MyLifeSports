import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import palette from '../../../styles/palette';

const PostContentFragment = ({ text }) => {
    const onPress = e => {
        e.preventDefault();
    };

    return(
        <View style={ styles.container }>
            <Text style={ styles.titleFont }>
                { text }
            </Text>
            <View style={ styles.content }>
                {/* PostList 추가 */}
            </View>
            <View style={ styles.footer }>
                <TouchableOpacity onPress={ onPress }>
                    <Text>
                        전체 보기
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
        backgroundColor: palette.white[0]
    },
    titleFont: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 20,
    },
    content: {
        width: '100%',
        height: '70%',
        backgroundColor: palette.white[0]
    },
    footer: {
        alignItems: 'flex-end',
        width: '100%',
        height: '10%',
        paddingRight: 20,
        backgroundColor: palette.white[0],
    },
});

export default PostContentFragment;