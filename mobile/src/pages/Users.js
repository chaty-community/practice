// 必要なライブラリをインポート
import React from 'react';
//ScrollViewタグは縦にスクロールできる画面を作るためのタグ
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import styled from 'styled-components';
//OneUser.jsからOneUserコンポーネントをインポート
import OneUser from '../components/oneUser';
const Users = ({ navigation }) => {
    const friends = [
        {
          id: 1,
          name: '山田二郎',
          img: 'https://icooon-mono.com/i/icon_15964/icon_159641_64.png',
          status_message: 'カレーライス好き',
        },
        {
          id: 2,
          name: '佐藤三郎',
          img: 'https://icooon-mono.com/i/icon_11068/icon_110681_64.png',
          status_message: 'うどんよりそば派',
        },
        {
          id: 3,
          name: '伊藤四郎',
          img: 'https://icooon-mono.com/i/icon_11075/icon_110751_64.png',
          status_message: 'うどんよりそば派',
        },
      ];

  return (
    // 縦にスクロールするためにviewタグではなくScrollViewタグで囲んでいる
    <ScrollView style={{ backgroundColor: '#fff',}}>
      <UserBox>
        {/* Imageタグにスタイルを当てて作ったStyledImageタグ。uriによって画像を読み込んでいる。 */}
        <StyledImage
          source={{
            uri: 'https://icooon-mono.com/i/icon_11205/icon_112051_64.png',
          }}
        />
        <UserName>チャティ太郎</UserName>
        <UserMessage>プログラミング勉強中</UserMessage>
      </UserBox>
      <FriendsBar>
        <FriendsText>{`友だち ${friends.length}`}</FriendsText>
        <Icon
        // iconタグはnameプロパティで使いたいアイコンを指定。
          name="person-outline"
          color="#7cc5db"
          size={16}
          // containerStyleプロパティはIconタグにスタイルを当てるためのプロパティ
          containerStyle={{ position: 'absolute', top: 4, left: 3 }}
        />
      </FriendsBar>
      {/* mapメソッドを定義、その際、friendという変数を定義*/}
      {friends.map(friend => {
        return (
          // 上でOneUserコンポーネントをインポートしてここでOneUserタグとして使用
          <OneUser
          // 変数friendのidを取得
            key={friend.id}
          //変数friendのnameを取得
            name={friend.name}
            //変数friendのimgを取得
            img={friend.img}
            //変数friendのstatus_messageを取得
            message={friend.status_message}
            onPress={() => {
              // navigation.navigateとは、引数に取ったページに移動するためのメソッド
              // 引数の中のRoomViewはNavigator.jsで定義している
                navigation.navigate("RoomView");
            }}
          />
        );
      })}
    </ScrollView>
  );
};
const { width } = Dimensions.get('window');
const StyledImage = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border: solid 1px;
  background-color: #eefbff;
  opacity: 0.7;
  margin-top: 7px;
  margin-left: 15px;
`;
const UserBox = styled(View)`
  width: ${width};
  height: 70px;
  display: flex;
  flex-direction: row;
`;
const UserName = styled(Text)`
  font-weight: 500;
  font-size: 18;
  margin-top: 26px;
  margin-left: 25px;
`;
const UserMessage = styled(Text)`
  color: #888888;
  font-size: 11px;
  margin-top: 30px;
  margin-left: 80px;
`;
const FriendsBar = styled(View)`
  width: 100%;
  height: 26px;
  padding: 2px 0;
  background-color: #eefbff;
  border-top-width: 0.6;
  border-bottom-width: 0.6;
  border-color: #acd5e2;
`;
const FriendsText = styled(Text)`
  padding-top: 3px;
  padding-left: 20px;
  color: #7cc5db;
  font-size: 13px;
`;
export default Users;