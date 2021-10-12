import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const DetailContent = () => {
    return(
        <View style={ styles.container } >
            <View style={ styles.rule_info_container }>
                <Text style={ styles.rule_info }>
                    이용 안내
                </Text>
                <Text>
                    기본 이용 시간 : 3시간
                    { '\n' }
                    기본 이용 요금 : 3시간 기준 100,000원
                </Text>
            </View>
            <View style={ styles.date_container }>
                <Text style={ styles.select_date }>
                    <CalendarStrip style={ styles.date } />
                    <CustomTimePicker />
                    {
                        // rental module
                    }
                </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    rule_info_container: {
        width: '100%',
        height: 100,
        padding: 20,
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    rule_info: {
        fontWeight: 'bold',
        fontSize: 20
    },
    date_container: {
        width: '100%',
        height: 100,
        padding: 20
    },

});

export default DetailContent;