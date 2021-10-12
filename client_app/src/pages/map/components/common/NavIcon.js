import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../../styles/palette';

const NavIcon = ({ name }) => {
    return <Icon name={ name }
                 size={ 40 }
                 color={ palette.blue[4] } 
           />;
};

export default NavIcon;