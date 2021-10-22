import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import palette from '../../../styles/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DetailArticle = post => {
    const navigation = useNavigation()
    const toMapDetail = e => {
        navigation.navigate("MapToWhere", {
            _id: post.post.rental.mapId
        });
    };

    return(
        <View style={ styles.container }>
            <View style={ styles.info }>
                <Icon size={ 30 } 
                      name={ "ios-checkmark-sharp" }
                      color={ palette.blue[2] }
                />
                <Text>
                    { post.post.writer } 님이 대관을 하였어요!
                </Text>
            </View>
            <View style={ styles.row }>
                <Text>
                    { post.post.rental.mapName }
                </Text>
                <Text>
                    { post.post.rental.date }
                </Text>
            </View>
            <View style={ styles.footer }>
                <TouchableOpacity onPress={ toMapDetail }>
                    <Text>
                        대관 위치 보러갈래요
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        borderRadius: 15,
        padding: 15,
        backgroundColor: palette.white[0]
    },
    info: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    row: {
        marginTop: 20,
    },
    footer: {
        marginTop: 20,
        alignItems: 'flex-end'
    }
});

export default DetailArticle;