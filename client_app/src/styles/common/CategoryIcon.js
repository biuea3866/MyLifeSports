import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../palette';

const CategoryIcon = ({ 
    name, 
    text 
}) => {
    return(
        <View style={ styles.container }>
            <TouchableOpacity>
                <Icon 
                    size={ 48 }
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