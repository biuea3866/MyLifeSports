import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { View } from "react-native";
import { Marker } from "react-native-nmap";
import { MapConsumer } from "../context/MapContext";
import markerImage from '../../../assets/img/markerImage.png';
import palette from "../../../styles/palette";
import { changeState } from "../../../modules/marker";

const CustomMarker = ({ data }) => {
    const dispatch = useDispatch();
    const { visible } = useSelector(({ marker }) => ({ visible: marker.visible }));
    const coordinate = {
        latitude: data.ycode,
        longitude: data.xcode,
    };
    const onVisible = e => {
        e.preventDefault();

        dispatch(changeState(true));
    };

    return(
        <View>
            <Marker coordinate={ coordinate } 
                    image={ markerImage }
                    pinColor={ palette.blue[4] }
                    caption={{
                        text: data.nm,
                        textSize: 13,
                    }}
                    onClick={ onVisible }
            />
        </View>
    );
};

export default CustomMarker;