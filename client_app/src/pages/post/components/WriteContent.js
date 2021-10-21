import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import palette from '../../../styles/palette';
import RentalList from './RentalList';

const WriteContent = () => {
    return(
        <View>
            <View style={ styles.container }>
                <View style={ styles.label }>
                    <Text style={ styles.font }>
                        제목을 적어주세요
                    </Text>
                </View>
                <TextInput style={ styles.title_input }/>
            </View>
            <View style={ styles.container }>
                <View style={ styles.label }>
                    <Text style={ styles.font }>
                        내용을 적어주세요
                    </Text>
                </View>
                <TextInput style={ styles.content_input }
                           multiline={ true }
                           textAlignVertical="top"
                />
            </View>
            <View style={ styles.container }>
                <View style={ styles.label }>
                    <Text style={ styles.font }>
                        대관 내역이에요
                    </Text>
                </View>
                <RentalList />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 370,
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 40,
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 2,
    },
    label: {
        marginBottom: 10,
        marginLeft: 10,
    },
    font: {
        fontWeight: 'bold'
    },
    title_input: {
        width: 370,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: palette.white[0],
        color: palette.black[0]
    },
    content_input: {
        width: 370,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: palette.white[0],
        color: palette.black[0]
    }
});

export default WriteContent;