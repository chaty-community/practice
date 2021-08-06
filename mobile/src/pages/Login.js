import React from 'react';
import styled from 'styled-components';
import {
    ImageBackground,
    Dimensions,
    View,
    Text,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';


const Login = () => {
  return (
    <ImageBackground
      source={require('../../assets/img/background.png')}
      style={{ width: width, height: height, backgroundColor: '#ffffff' }}
    >
        <StyledView>
        <StyledLogo source={require('../../assets/img/chaty-logo.png')} />
        <Label>名前</Label>
        <FormInput autoCapitalize="none" />
        <Label>パスワード</Label>
        <FormInput autoCapitalize="none" secureTextEntry={true} />
        <LoginBtn activeOpacity={0.9}>
          <StyledText>登録・ログイン</StyledText>
        </LoginBtn>
        </StyledView>
        <StyledBackgroundCover colors={['#0072ff','#00c6ff']}/>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get('window');
const StyledView = styled(View)`
height:410;
margin-top:${(height - 410) / 2};
z-index:10;
`;
const StyledBackgroundCover = styled(LinearGradient)`
position:relative;
bottom:${(height - 410) / 2 + 410};
height:100%;
opacity:0.6;
`;
const StyledLogo = styled(ImageBackground)`
  width: 300;
  height: 70;
  margin: 0px auto 30px;
`;
const Label = styled(Text)`
  color: #ffffff;
  width: ${width - 100};
  margin: 0 auto;
  padding: 20px 0 5px 10px;
  font-weight: 500;
  font-size: 12px;
`;
const FormInput = styled(TextInput)`
  height: 40px;
  width: ${width - 110};
  padding-left: 10px;
  background-color: #eeeeee;
  border-color: #555555;
  border-radius: 4px;
  margin: 0 auto;
`;
const LoginBtn = styled(TouchableOpacity)`
  height: 40px;
  width: ${width - 110};
  background-color: #ff8d00;
  border-radius: 4px;
  margin: 35px auto 0;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.6;
`;
const StyledText = styled(Text)`
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;
  padding-top: 9px;
`;
export default Login;
