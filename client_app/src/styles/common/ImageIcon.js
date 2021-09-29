import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import palette from '../palette';
import arrow from '../../assets/img/arrow.png';
import badminton from '../../assets/img/badminton.png';
import climb from '../../assets/img/climb.png';
import gateball from '../../assets/img/gateball.png';
import ice_skate from '../../assets/img/ice_skate.png';
import inline_skate from '../../assets/img/inline_skate.png';
import pingpong from '../../assets/img/pingpong.png';
import sepak_takraw from '../../assets/img/sepak_takraw.png';
import shoot from '../../assets/img/shoot.png';
import swim from '../../assets/img/swim.png';
import volleyball from '../../assets/img/volleyball.png';
import tennis from '../../assets/img/tennis.png';

const ImageIcon = ({ name, text }) => {
    if(name === "arrow") name = arrow
    else if(name === "badminton") name = badminton
    else if(name === "climb") name = climb 
    else if(name === "gateball") name = gateball 
    else if(name === "ice_skate") name = ice_skate
    else if(name === "inline_skate") name = inline_skate
    else if(name === "pingpong") name = pingpong
    else if(name === "sepak_takraw") name = sepak_takraw
    else if(name === "shoot") name = shoot
    else if(name === "swim") name = swim
    else if(name === "volleyball") name = volleyball
    else if(name === 'tennis') name = tennis;

    return(
        <View style={ styles.container }>
            <TouchableOpacity>
                <Image style={ styles.icon }
                       source={ name }
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
    icon: {
        tintColor: palette.blue[4],
    }, 
    font: {
        fontWeight: 'bold',
    },
});

export default ImageIcon;