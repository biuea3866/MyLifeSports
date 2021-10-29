import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryIcon from '../../../styles/common/CategoryIcon';
import ImageIcon from '../../../styles/common/ImageIcon';
import palette from '../../../styles/palette';

const HomeFragment = () => {
    const categoryIcon = [
        { name: "ios-baseball-outline", text: "야구", type_nm: "야구장" },
        { name: "ios-basketball-outline", text: "농구", type_nm: "생활체육관" },
        { name: "ios-basketball", text: "야외농구", type_nm: "농구장" },
        { name: "ios-football-outline", text: "축구", type_nm: "축구장" },
        { name: "ios-bicycle", text: "자전거", type_nm: "산악자전거장" },
        { name: "ios-school", text: "학교체육", type_nm: "학교체육시설" }, 
        { name: "ios-football", text: "풋살", type_nm: "풋살장" }
    ];
    const imageIcon = [
        { name: "arrow", text: "양궁", type_nm: "국궁장" },
        { name: "badminton" ,text: "배드민턴", type_nm: "배드민턴장" },
        { name: "climb" ,text: "클라이밍", type_nm: "클라이밍장" }, 
        { name: "gateball", text: "게이트볼", type_nm: "게이트볼장" },
        { name: "ice_skate", text: "스케이트", type_nm: "빙상장" },
        { name: "inline_skate", text: "인라인", type: "인라인스케이트장" },
        { name: "pingpong", text: "탁구" , type_nm: "탁구장"},
        { name: "sepak_takraw", text: "족구", type_nm: "족구장" },
        { name: "shoot", text: "사격", type_nm: "사격장" },
        { name: "swim", text: "수영", type_nm: "수영장" }, 
        { name: "volleyball", text: "배구", type_nm: "구기체육관" }, 
        { name: "volleyball", text: "야외배구", type_nm: "배구장" },
        { name: "tennis", text: "테니스", type_nm: "테니스장" }
    ];

    return(
        <View style={ styles.container }>
            {
                categoryIcon.map(item => { 
                    return <CategoryIcon name={ item.name }
                                         text={ item.text } 
                                         type_nm={ item.type_nm }
                           />
                })
            }
            {
                imageIcon.map(item => {
                    return <ImageIcon name={ item.name } 
                                      text={ item.text }
                                      type_nm={ item.type_nm }
                           />;
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        backgroundColor: palette.white[0],
    },
});

export default HomeFragment;