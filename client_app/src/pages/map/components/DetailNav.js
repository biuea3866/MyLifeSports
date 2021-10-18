import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';
import NavIcon from './common/NavIcon';

const DetailNav = () => {
    const { map } = useSelector(({ map }) => ({ map: map.map }));

    return(
        <View style={ styles.container }>
            <View style={ styles.icon }>
                <NavIcon name={ "ios-car" } />
                {
                    map.parking_lot === '주차 가능' ?
                    <Text style={ styles.text } >
                        주차 가능
                    </Text> :
                    <Text style={ styles.text }>
                        주차 불가
                    </Text>
                }
            </View>
            <View style={ styles.icon } >
                <NavIcon name={ "ios-home" } />
                {
                    map.in_out === '실내' ?
                    <Text style={ styles.text } >
                        실내
                    </Text> :
                    <Text style={ styles.text } >
                        야외
                    </Text>
                }
            </View>
            <View style={ styles.icon } >
                <NavIcon name={ "ios-person" } />
                {
                    map.edu_yn === '유' ?
                    <Text style={ styles.text } >
                        교육 가능
                    </Text> :
                    <Text style={ styles.text } >
                        교육 불가
                    </Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    icon: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
});

export default DetailNav;