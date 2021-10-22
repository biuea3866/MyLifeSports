import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PostCard = ({ item }) => {
    const navigation = useNavigation();
    const toDetailPage = e => {
        navigation.navigate("PostDetail", {
            _id: item._id
        });
    };

    var info = 
    (item.rental && item.rental.status) === "BEING" ? 
    <View style={ styles.info }>
        <Icon size={ 30 } 
              name={ "ios-checkmark-sharp" }
              color={ palette.blue[2] }
        />
        <Text>대관이 되어있어요!</Text>
    </View> : null;

    return(
        <View style={ styles.container }>
            <TouchableOpacity onPress={ toDetailPage }>
                <View style={ styles.type_info }>
                    <Text style={ styles.type }>
                        { item.type }
                    </Text>
                    { info }
                </View>
                <View style={ styles.row }>
                    <Text>
                        { item.title }
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0],
        borderRadius: 6,
        margin: 10,
        padding: 10
    },
    row: {
        marginTop: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 15
    },
    info: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 170
    },
    type_info: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default PostCard;