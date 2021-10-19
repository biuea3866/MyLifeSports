import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import MyPageIcon from './MyPageIcon';
import palette from '../../../styles/palette';

const MyPageContent = () => {
    const navigation = useNavigation();
    const onPressToInformation = e => {
        e.preventDefault();

        navigation.navigate('Information', {
            name: 'Information'
        });
    };

    const onPressToMyRental = e => {
        e.preventDefault();
        
        navigation.navigate("MyRental");
    };

    const onPressToMyPost = e => {
        e.preventDefault();
        
        navigation.navigate("MyPost", {
            name: 'MyPost'
        });
    };

    return(
        <View style={ styles.container }>
            <View style={ styles.icon }>
                <TouchableOpacity onPress={ onPressToInformation }>
                    <MyPageIcon 
                        name={ 'ios-person-circle-outline' }
                        text={ "정보" }
                    />
                </TouchableOpacity>
            </View>
            <View style={ styles.icon }>
                <TouchableOpacity onPress={ onPressToMyPost }>
                    <MyPageIcon
                        name={ 'ios-albums-outline' }
                        text={ "게시글" }
                    />
                </TouchableOpacity>
            </View>
            <View style={ styles.icon }>
                <TouchableOpacity onPress={ onPressToMyRental }>
                    <MyPageIcon 
                        name={ 'ios-card-outline' }
                        text={ "대관내역" }
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[4],
        borderBottomWidth: 1,
    },
    icon: { 
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
    },
});

export default MyPageContent;