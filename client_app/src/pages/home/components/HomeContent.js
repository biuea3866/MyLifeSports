import React from 'react';
import { 
    StyleSheet,
    View
} from 'react-native';
import CategoryIcon from '../../../styles/common/CategoryIcon';
import ImageIcon from '../../../styles/common/ImageIcon';
import palette from '../../../styles/palette';

const HomeContent = () => {
    return(
        <View style={ styles.container }>
            <View style={ styles.categoryLine }>
                <CategoryIcon
                    name={ "ios-baseball-outline" }
                    text={ "야구" }
                    type_nm={ "야구장" }
                />
                <CategoryIcon
                    name={ "ios-basketball-outline" }
                    text={ "농구" }
                    type_nm={ "생활체육관" }
                />
                <CategoryIcon
                    name={ "ios-basketball" }
                    text={ "야외농구" }
                    type_nm={ "농구장" }
                />
                <CategoryIcon
                    name={ "ios-football-outline" }
                    text={ "축구" }
                    type_nm={ "축구장" }
                />
            </View>
            <View style={ styles.categoryLine }>
                <ImageIcon
                    name={ "arrow" }
                    text={ "양궁" }
                    type_nm={ "국궁장" }
                />
                <ImageIcon
                    name={ "badminton" }
                    text={ "배드민턴" }
                    type_nm={ "배드민턴장" }
                />
                <ImageIcon
                    name={ "climb" }
                    text={ "클라이밍" }
                    type_nm={ "클라이밍장" }
                />
                <ImageIcon
                    name={ "gateball" }
                    text={ "게이트볼" }
                    type_nm={ "게이트볼장" }
                />
            </View>
            <View style={ styles.categoryLine }>
                <ImageIcon
                    name={ "ice_skate" }
                    text={ "스케이트" }
                    type_nm={ "빙상장" }
                />
                <ImageIcon
                    name={ "inline_skate" }
                    text={ "인라인" }
                    type={ "인라인스케이트장" }
                />
                <ImageIcon
                    name={ "pingpong" }
                    text={ "탁구" }
                    type_nm={ "탁구장" }
                />
                <ImageIcon
                    name={ "sepak_takraw" }
                    text={ "족구" }
                    type_nm={ "족구장" }
                />
            </View>
            <View style={ styles.categoryLine }>
                <ImageIcon
                    name={ "shoot" }
                    text={ "사격" }
                    type_nm={ "사격장" }
                />
                <ImageIcon
                    name={ "swim" }
                    text={ "수영" }
                    type_nm={ "수영장" }
                />
                <ImageIcon
                    name={ "volleyball" }
                    text={ "배구" }
                    type_nm={ "구기체육관" }
                />
                <ImageIcon
                    name={ "volleyball" }
                    text={ "야외배구" }
                    type_nm={ "배구장" }
                />
            </View>
            <View style={ styles.categoryLine }>
                <CategoryIcon
                    name={ "ios-bicycle" }
                    text={ "자전거" }
                    type_nm={ "산악자전거장" }
                />
                <CategoryIcon
                    name={ "ios-school" }
                    text={ "학교체육" }
                    type_nm={ "학교체육시설" }
                />
                <CategoryIcon
                    name={ "ios-football" }
                    text={ "풋살" }
                    type_nm={ "풋살장" }
                />
                <ImageIcon
                    name={ "tennis" }
                    text={ "테니스" }
                    type_nm={ "테니스장" }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: 420,
        backgroundColor: palette.white[0],
    },
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    categoryLine: {
        flexDirection: 'row',
        width: 420,
        height: 70,
        marginBottom: 20,
    },
});

export default HomeContent;