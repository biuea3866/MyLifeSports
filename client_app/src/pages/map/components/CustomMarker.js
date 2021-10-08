import React from "react"
import { useDispatch } from 'react-redux';
import { View } from "react-native";
import { Marker } from "react-native-nmap";
import markerImage from '../../../assets/img/markerImage.png';
import palette from "../../../styles/palette";
import { changeState } from "../../../modules/marker";
import { readMap } from "../../../modules/map";

const CustomMarker = ({ data }) => {
    const dispatch = useDispatch();
    const coordinate = {
        latitude: data.ycode,
        longitude: data.xcode,
    };
    const onVisible = e => {
        e.preventDefault();

        dispatch(readMap(map._id));

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