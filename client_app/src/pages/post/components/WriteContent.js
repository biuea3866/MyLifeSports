import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../../modules/post';
import palette from '../../../styles/palette';
import RentalList from './RentalList';

const WriteContent = () => {
    const dispatch = useDispatch();
    const { type } = useSelector(({ post }) => ({ type: post.type }));
    const onChange = e => {
        const inputAccessoryViewID = e.target._internalFiberInstanceHandleDEV.memoizedProps.inputAccessoryViewID;
        const value = e.nativeEvent.text;

        dispatch(changeField({
            key: inputAccessoryViewID,
            value,
        }));
    };

    return(
        <View>
            <View style={ styles.container }>
                <View style={ styles.label }>
                    <Text style={ styles.font }>
                        제목을 적어주세요
                    </Text>
                </View>
                <TextInput style={ styles.title_input }
                           inputAccessoryViewID="title"
                           onChange={ onChange }
                />
            </View>
            <View style={ styles.container }>
                <View style={ styles.label }>
                    <Text style={ styles.font }>
                        내용을 적어주세요
                    </Text>
                </View>
                <TextInput style={ styles.content_input }
                           inputAccessoryViewID="content"
                           multiline={ true }
                           textAlignVertical="top"
                           onChange={ onChange }
                />
            </View>
            {  
                type === '함께해요' &&
                <View style={ styles.container }>
                    <View style={ styles.label }>
                        <Text style={ styles.font }>
                            대관 내역이에요
                        </Text>
                    </View>
                    <RentalList />
                </View>
            }
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