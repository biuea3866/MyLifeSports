import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-vector-icons/Icon";
import palette from "../../../styles/palette";
import { MapConsumer } from "../context/MapContext";

const InfoClose = () => {
    const onClose = actions => {
        actions.setVisible(false);
    };

    return (
        <View style={ styles.container } >
            <View style={ styles.type_article }>
                <MapConsumer>
                    {
                        ({ state }) => (
                            <Text style={ styles.type_font }>
                                { state.map.type_nm }
                            </Text>
                        )
                    }
                </MapConsumer>
            </View>
            <MapConsumer>
                { 
                    ({ actions }) => (
                        <TouchableOpacity onPress={ onClose(actions) } >
                            <Icon name={ 'ios-close-sharp' } 
                                  size={ 25 }
                                  color={ palette.blue[4] }
                            />
                        </TouchableOpacity>
                    )
                }
            </MapConsumer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        height: '15%',
        marginTop: 10,
        paddingRight: 10,
    },
    type_article: {
        width: '88%',
        marginLeft: 15,
    },
    type_font: {
        fontWeight: 'bold'
    },
});

export default InfoClose;