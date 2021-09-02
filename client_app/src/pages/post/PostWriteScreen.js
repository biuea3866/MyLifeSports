import React from 'react';
import { 
    StyleSheet, 
    ScrollView,
    Text 
} from 'react-native';

const PostWriteScreen = () => {
    return(
        <ScrollView style={ styles.container }>   
            <Text>Post Write Screen</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default PostWriteScreen;