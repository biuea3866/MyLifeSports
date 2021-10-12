import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';

const DetailHeader = () => {
    const { map } = useSelector(({ map }) => ({ map: map.map }));
    const onOpenUrl = () => {
        Linking.openURL(`${ map.home_page }`);
    };

    return(
        <View style={ styles.container } >
            <View style={ styles.title } >
                <Text style={ styles.font } >
                    { map.nm }
                </Text>
            </View>
            <View style={ styles.sub }>
                <Text>
                    { map.addr }
                </Text>
                <Text>
                    전화번호: { map.tel }
                </Text>
                <Text>
                    홈페이지: 
                    <Text onPress={ onOpenUrl }>
                        { map.home_page }
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    title: {
        width: '100%',
        height: 40,
        marginTop: 30,
        marginLeft: 10
    },
    font: {
        fontWeight: 'bold',
        fontSize: 20
    },
    sub: {
        flexDirection: 'column',
        width: '100%',
        height: 40,
        margin: 10
    },
});

export default DetailHeader;