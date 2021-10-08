import { StyleSheet, Text, View } from "react-native";
import palette from "../../../styles/palette";
import { MapConsumer } from "../context/MapContext";

const Info = () => {
    return(
        <View style={ styles.container } >
            <View style={ styles.title } >
                <MapConsumer>
                    {
                        ({ state }) => {
                            <Text style={ styles.place_name } >
                                { state.map.nm }
                            </Text>
                        }
                    }
                </MapConsumer>
            </View>
            <View style={ styles.address } >
                <MapConsumer>
                    {
                        ({ state }) => {
                            <Text>
                                { state.map.addr }
                            </Text>
                        }
                    }
                </MapConsumer>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '55%',
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
    },
    title: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 15,
    },
    place_name: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    address: {
        justifyContent: 'flex-start',
        marginLeft: 15,
    },
});

export default Info;