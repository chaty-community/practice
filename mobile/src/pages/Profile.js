// 必要なライブラリを読み込む
import React from 'react';
//TouchableOpacityはボタンを作るRNのタグ
import { View, Text, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
//iconを表示するためのタグ
import { Icon } from 'react-native-elements';
import styled from 'styled-components';
//プロフィールコンポーネントをアロー関数で作成
//ここが画面に表示される部分
const Profile = () => {
  return (
    //JSX
    <StyledView>
      <ChangeIconSpace>
        <StyledImage source={require('../../assets/img/icon.png')} />
      </ChangeIconSpace>
      <Label>名前</Label>
      <StyledTextInput autoCapitalize="none" />
      <Label>ステータスメッセージ</Label>
      <StyledTextInput autoCapitalize="none" />
      <StyledTouchableOpacity activeOpacity={0.8}>
        <Title>保存</Title>
      </StyledTouchableOpacity>

      <LogoutBtn activeOpacity={0.8}>
        {/* 使いたいアイコンをnameプロパティで指定、colorプロパティで色を、sizeプロパティで大きさを指定 */}
        <Icon name="sync-disabled" color="#7cc5db" size={40} />
        <LogoutLabel>ログアウトする</LogoutLabel>
        {/* 使いたいアイコンをnameプロパティで指定、colorプロパティで色を、sizeプロパティで大きさを指定*/}
        <Icon name="navigate-next" color="#7cc5db" size={40} />
      </LogoutBtn>

    </StyledView>
  );
};
//スタイルを定義
const { width } = Dimensions.get('window');
//スタイルドビューコンポーネントを作成している
//import styled from 'styled-components';で読み込んだ
const StyledView = styled(View)`
  background-color: #fff;
`;
const ChangeIconSpace = styled(View)`
  margin: 20px auto 15px;
`;
const StyledImage = styled(Image)`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  margin-top: 25px;
`;
const Label = styled(Text)`
  margin-top: 20px;
  margin-left: 55px;
  color: #7cc5db;
  font-size: 16px;
`;
const StyledTextInput = styled(TextInput)`
  background-color: #ffffff;
  width: ${width - 100};
  height: 40px;
  margin-top: 6px;
  margin-bottom: 20px;
  margin-left: 50px;
  padding-left: 10px;
  border-bottom-width: 1px;
  border-color: #7cc5db;
  border-radius: 3px;
  font-size: 20px;
`;
const StyledTouchableOpacity = styled(TouchableOpacity)`
  height: 40px;
  width: 100px;
  background-color: #ff8d00;
  margin: 30px auto 0;
  border-radius: 4px;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.1;
`;
const Title = styled(Text)`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  padding-top: 8px;
  margin: 0 auto;
`;
// ボタンを作るRNのタグであるTouchableOpacityにスタイルを当てている。
const LogoutBtn = styled(TouchableOpacity)`
  height: 40px;
  width: 100%;
  border-color: #7cc5db;
  border-top-width: 1px;
  border-bottom-width: 1px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const LogoutLabel = styled(Text)`
  font-size: 20px;
  color: #7cc5db;
  padding-top: 10px;
`;

export default Profile;
