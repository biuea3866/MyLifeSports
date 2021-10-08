import React from 'react';
import { StyleSheet } from 'react-native';
import Loading from '../../../styles/common/Loading';
import NaverMapView from 'react-native-nmap';
import CustomMarker from './CustomMarker';
import { useSelector } from 'react-redux';

const NaverMap = () => {
    const { visible } = useSelector(({ marker }) => ({ visible: marker.visible }));
    const defaultLocation = {
        latitude: 37.6009735, 
        longitude: 126.9484764
    };
    const dummyData = [
        {"ycode":37.6144169,"type_nm":"구기체육관","gu_nm":"중랑구","parking_lot":"주차 가능(일반 18면 / 장애인 2면)","bigo":"","xcode":127.0842018,"tel":"949-5577","addr":"중랑구 숙선옹주로 66","in_out":"실내","home_page":"http://www.jungnangimc.or.kr/","edu_yn":"유","nm":"묵동다목적체육관"},
        {"ycode":37.573171,"type_nm":"골프연습장","gu_nm":"중랑구","parking_lot":"용마폭포공원 주차장 이용(시간당 1,200원 / 5분당 100원)","bigo":"","xcode":127.0858392,"tel":"490-0114 ","addr":"중랑구 용마산로 217","in_out":"실내","home_page":"http://www.jjang.or.kr/jjang/","edu_yn":"유","nm":"중랑청소년수련관 골프연습장"},
        {"ycode":37.580646,"type_nm":"수영장","gu_nm":"중랑구","parking_lot":"홈플러스 면목점 B동 이용, 겸재로 2길 거주자 우선 주차 구역 이용(36면) ","bigo":"","xcode":127.0773483,"tel":"435-0990","addr":"중랑구 면목동 중랑천 장안교 ","in_out":"실외","home_page":"http://jungnangimc.or.kr/","edu_yn":"무","nm":"중랑천물놀이시설"},
        {"ycode":37.6058844,"type_nm":"수영장","gu_nm":"중랑구","parking_lot":"주차 가능","bigo":"","xcode":127.1088479,"tel":"492-7942","addr":"중랑구 송림길 156","in_out":"실내","home_page":"http://mangwoo.kr/","edu_yn":"유","nm":"망우청소년수련관 수영장"},
        {"ycode":37.5792399,"type_nm":"수영장","gu_nm":"중랑구","parking_lot":"주차 가능(51면)","bigo":"","xcode":127.0959499,"tel":"436-9200","addr":"중랑구 사가정로72길 47","in_out":"실내","home_page":"http://jungnangspo.seoul.kr","edu_yn":"유","nm":"중랑문화체육관 수영장"},
        {"ycode":37.6151721,"type_nm":"수영장","gu_nm":"중랑구","parking_lot":"주차 가능(36면)","bigo":"","xcode":127.0874763,"tel":"3423-1070","addr":"중랑구 신내로15길 189","in_out":"실내","home_page":"http://jungnangspo.seoul.kr","edu_yn":"유","nm":"중랑구민체육센터 수영장"},
        {"ycode":37.573171,"type_nm":"생활체육관","gu_nm":"중랑구","parking_lot":"용마폭포공원 주차장 이용(시간당 1,200원 / 5분당 100원)","bigo":"","xcode":127.0858392,"tel":"490-0114 ","addr":"중랑구 용마산로 217","in_out":"실내","home_page":"http://www.jjang.or.kr/jjang/","edu_yn":"유","nm":"중랑청소년수련관"},
        {"ycode":37.6058844,"type_nm":"생활체육관","gu_nm":"중랑구","parking_lot":"주차 가능","bigo":"","xcode":127.1088479,"tel":"492-7942","addr":"중랑구 송림길 156","in_out":"실내","home_page":"http://http://mangwoo.kr/","edu_yn":"유","nm":"망우청소년수련관"},
        {"ycode":37.5878763,"type_nm":"생활체육관","gu_nm":"중랑구","parking_lot":"공영주차장 회원 2시간 무료","bigo":"","xcode":127.0808914,"tel":"495-5200","addr":"중랑구 겸재로 23길 27","in_out":"실내","home_page":"http://jungnangspo.seoul.kr","edu_yn":"유","nm":"면목2동체육관"},
    ];
    

    return(
        <NaverMapView style={ 
                          visible ? 
                          styles.openInfoContainer :
                          styles.closeInfoContainer
                      }
                      showsMyLocationButton={ true }
                      center={{
                          ...defaultLocation,
                          zoom: 15,
                      }}
                      scaleBar={ true }
        >
            {
                dummyData ?
                dummyData.map(
                    (map, i) => {
                        return <CustomMarker key={ i }
                                             data={ map } 
                               />
                    }
                ) : <Loading />
            }
        </NaverMapView>
    );
};

const styles = StyleSheet.create({
    openInfoContainer: {
        width: '100%',
        height: '60%'
    },
    closeInfoContainer: {
        width: '100%',
        height: '90%',
    },
});

export default NaverMap;