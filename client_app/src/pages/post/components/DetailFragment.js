import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DetailHeader from './DetailHeader';
import DetailArticle from './DetailArticle';
import DetailContent from './DetailContent';
import DetailFooter from './DetailFooter';

const DetailFragment = item => {
    const post = item.item;
    const [info, setInfo] = useState(null);
    
    useEffect(() => {
        setInfo(
            (post.rental && post.rental.status) === "BEING" ? 
            <DetailArticle post={ post }/> : 
            null
        );
    }, [post]);

    return(
        <View style={ styles.container }>
            <DetailHeader post={ post } />
            { info }
            <DetailContent post={ post } />
            <DetailFooter post={ post } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default DetailFragment;