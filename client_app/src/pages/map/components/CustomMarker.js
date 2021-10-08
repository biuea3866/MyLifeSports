import React from "react"
import { View } from "react-native";
import { Marker } from "react-native-nmap";
import { MapConsumer } from "../context/MapContext";
import markerImage from '../../../assets/img/markerImage.png';
import palette from "../../../styles/palette";

const CustomMarker = ({ data }) => {
    const coordinate = {
        latitude: data.ycode,
        longitude: data.xcode,
    };

    return(
        <View>
            <MapConsumer>
                {
                    ({ actions }) => (
                        <Marker coordinate={ coordinate } 
                                image={ markerImage }
                                pinColor={ palette.blue[4] }
                                caption={{
                                    text: data.nm,
                                    textSize: 13,
                                }}
                                onClick={() => {
                                    actions.setVisible(true);
                                    actions.setMap(data);
                                }}
                        />
                    )
                }
            </MapConsumer>
        </View>
    );
};

export default CustomMarker;