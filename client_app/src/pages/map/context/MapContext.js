import React, { createContext, useState } from "react";

const MapContext = createContext({
    state: {
        visible: false,
        map: '',
        mapType: '',
    },
    action: {
        setVisible: () => {},
        setMap: () => {},
        setMapType: () => {},
    }
});

const MapProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [map, setMap] = useState('');
    const [mapType, setMapType] = useState('');
    const value = {
        state: {
            visible,
            map,
            mapType,
        },
        actions: {
            setVisible,
            setMap,
            setMapType,
        },
    };

    return (
        <MapContext.Provider value={ value } >
            { children }
        </MapContext.Provider>
    );
};

const { Consumer: MapConsumer } = MapContext;

export { MapProvider, MapConsumer };

export default MapContext;