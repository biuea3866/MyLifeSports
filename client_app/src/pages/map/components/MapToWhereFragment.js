import React from 'react';
import { StyleSheet } from 'react-native';
import CustomMarker from './CustomMarker';
import NaverMapView from 'react-native-nmap';

const MapToWhereFragment = item => {
    const map = item.item;
    const defaultLocation = {
        latitude: map.ycode, 
        longitude: map.xcode
    };

    console.log(item);

    return <NaverMapView style={ styles.map }
                         showsMyLocationButton={ true }
                         center={{
                             ...defaultLocation, 
                             zoom: 15 
                         }}
                         scaleBar={ true }
           >
                    {
                        map &&
                        <CustomMarker data={ map } />
                    }
           </NaverMapView>;
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '90%'
    }
});

export default MapToWhereFragment;