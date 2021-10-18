import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import CustomTimePicker from './common/CustomTimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../../modules/rental';
import palette from '../../../styles/palette';

const DetailContent = () => {
    const dispatch = useDispatch();
    const {
        time, 
        date
    } = useSelector(({ rental }) => ({ 
        time: rental.time,
        date: rental.date,
    }));
    const onDate = e => {
        dispatch(changeField({
            key: 'date',
            value: e.toString().substr(0, 15),
        }));
    };

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
                <Text style={ styles.date_title }>
                    대관 날짜 선택
                </Text>
                <CalendarStrip style={ styles.date } 
                                calendarHeaderStyle={{ color: palette.black[0] }}
                                dateNumberStyle={{ color: palette.black[0] }}
                                dateNameStyle={{ color: palette.black[0] }}
                                onDateSelected={ onDate }
                                disabledDateNameStyle={{color: palette.gray[4] }}
                                disabledDateNumberStyle={{color: palette.gray[4] }}
                                highlightDateNumberStyle={{color: palette.blue[0] }}
                                highlightDateNameStyle={{color: palette.blue[0] }}
                                startingDate={ new Date() }
                                minDate={ new Date() }
                />
                <CustomTimePicker />
                {
                    date &&
                    <View style={ styles.select }>
                        <Text style={ styles.select_font }>
                            선택 날짜 :
                        </Text>
                        <Text style={ styles.select_font }>
                            { date + "\t" + time }
                        </Text>
                    </View>
                }
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
    date_title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        height: 120,
        paddingTop: 20,
        paddingBottom: 10,
    },  
    select: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60,
    },
    select_font: {
        fontWeight: 'bold',
        fontSize: 17,
    }
});

export default DetailContent;