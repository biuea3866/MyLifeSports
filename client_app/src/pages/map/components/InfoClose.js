import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../modules/marker";
import palette from "../../../styles/palette";

const InfoClose = () => {
    const { map } = useSelector(({ map }) => ({ map: map.map }));
    const dispatch = useDispatch();
    const onClose = e => {
        e.preventDefault();

        dispatch(changeState(false));
    };

    return (
        <View style={ styles.container } >
            <View style={ styles.type_article }>
                <Text style={ styles.type_font }>
                    { map.type_nm }
                </Text>
            </View>
            <TouchableOpacity onPress={ onClose } >
                <Icon name={ 'ios-close-sharp' } 
                      size={ 25 }
                      color={ palette.blue[4] }
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        height: '15%',
        marginTop: 10,
        paddingRight: 10,
    },
    type_article: {
        width: '88%',
        marginLeft: 15,
    },
    type_font: {
        fontWeight: 'bold'
    },
});

export default InfoClose;