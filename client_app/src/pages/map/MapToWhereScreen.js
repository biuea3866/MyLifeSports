import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { readMap } from '../../modules/map';
import Loading from '../../styles/common/Loading';
import MapToWhereFragment from './components/MapToWhereFragment';

const MapToWhereScreen = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { map } = useSelector(({ map }) => ({ map: map.map }));
    const _id = route.params._id;

    useEffect(() => {
        dispatch(readMap(_id));
    }, [dispatch, _id]);

    return(
        <View style={ styles.container }>
            {
                map ?
                <MapToWhereFragment item={ map }/> : <Loading />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default MapToWhereScreen