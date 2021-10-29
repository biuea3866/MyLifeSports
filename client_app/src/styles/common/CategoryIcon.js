import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import palette from '../palette';
import { useDispatch } from 'react-redux';
import { listType } from '../../modules/maps';

const CategoryIcon = ({ 
    name, 
    text,
    type_nm,
}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const onClick = e => {
        dispatch(listType(type_nm));

        navigation.navigate("Map", {
            "type_nm": type_nm
        });
    };

    return(
        <View style={ styles.container }>
            <TouchableOpacity onPress={ onClick }>
                <Icon size={ 48 }
                      name={ name }
                      color={ palette.blue[4] }
                />
            </TouchableOpacity>
            <Text style={ styles.font }>
                { text }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        margin: 20,
    },
    font: {
        fontWeight: 'bold',
    },
});

export default CategoryIcon;