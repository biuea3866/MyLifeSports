import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import NaverMapView from 'react-native-nmap';
import CustomMarker from './CustomMarker';
import { useDispatch, useSelector } from 'react-redux';
import { listAll } from '../../../modules/maps';
import { useRoute } from '@react-navigation/core';

const NaverMap = () => {
    const route = useRoute();
    const { 
        visible,
        maps,
        error
    } = useSelector(({ 
        marker,
        maps,
    }) => ({ 
        visible: marker.visible,
        maps: maps.maps,
        error: maps.error,
    }));
    const dispatch = useDispatch();
    const defaultLocation = {
        latitude: 37.6009735, 
        longitude: 126.9484764
    };

    useEffect(() => {
        console.log(route.params);

        if(!route.params) {
            dispatch(listAll());
        }
    }, [dispatch, route.params]);

    return(
        <NaverMapView style={ 
                          visible ? 
                          styles.openInfoContainer :
                          styles.closeInfoContainer
                      }
                      showsMyLocationButton={ true }
                      center={{
                          ...defaultLocation,
                          zoom: 15,
                      }}
                      scaleBar={ true }
        >
            {
                maps &&
                maps.map(map => { return <CustomMarker data={ map } /> })
            }
        </NaverMapView>
    );
};

const styles = StyleSheet.create({
    openInfoContainer: {
        width: '100%',
        height: '60%'
    },
    closeInfoContainer: {
        width: '100%',
        height: '90%',
    },
});

export default NaverMap;