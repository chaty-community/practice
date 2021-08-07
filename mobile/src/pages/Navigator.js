//必要なライブラリを読み込む
import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
// Profile.jsをインポート
import Profile from './Profile';
// Room.jsをインポート
import Room from './Room';
// Users.jsをインポート
import Users from './Users';
// フッターを作るためのメソッド
import { createBottomTabNavigator } from 'react-navigation-tabs';
// createStackNavigatorではフッタータブを使わずに行き来したい画面を設定
import { createStackNavigator } from 'react-navigation-stack';
//画面を移動するために使うメソッド
import { createAppContainer } from 'react-navigation';
class Navigator extends React.Component {
  render() {
    const Navigation = createAppContainer(SignedInNavigator);
    return <Navigation />;
  }
}
// Navigator.jsを他のファイルでも使えるようにエクスポート
export default Navigator;
// 定数UserNavigatorを定義
const UsersNavigator = createStackNavigator(
  {
    // 下のUsersViewは好きなように命名できる
    UsersView: {
      // screenというキーに上でインポートしたUsers.js(Users)を入れる
      screen: Users,
      navigationOptions: {
        title: 'ユーザーリスト',
        // 戻るボタンを非表示（これを記述しないと戻るボタンが表示される。Room.jsでは記述していないため戻るボタンが表示される）
        headerLeft: null,
        headerStyle: {
          backgroundColor: '#002f6a',
          borderBottomColor: '#002f6a',
          borderBottomWidth: 2,
          height: 100,
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#ffffff',
      },
    },
    // 下のRoomViewは好きなように命名できる
    RoomView: {
      // screenというキーに上でインポートしたRoom.js(Room)を入れる
      screen: Room,
      navigationOptions: {
        title: 'チャットルーム',
        headerStyle: {
          backgroundColor: '#002f6a',
          borderBottomColor: '#002f6a',
          borderBottomWidth: 2,
          height: 100,
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#ffffff',
        headerBackTitle: '戻る',
      },
    },
  },
  {
    initialRouteName: 'UsersView',
  }
);
// 定数ProfileNavigatorを定義
const ProfileNavigator = createStackNavigator(
  {
    ProfileView: {
      // screenというキーに上でインポートしたProfile.jsを入れる
      screen: Profile,
      navigationOptions: {
        title: 'プロフィール',
        headerStyle: {
          backgroundColor: '#002f6a',
          borderBottomColor: '#002f6a',
          borderBottomWidth: 2,
          height: 100,
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#ffffff',
      },
    },
  },
  {
    initialRouteName: 'ProfileView',
  }
);
// createBottomTabNavigatorメソッドの中にUsersTabとProfileTabを定義（ここの命名は任意）
// SignedInNavigatorを定義、画面を移動するための要素を作成
const SignedInNavigator = createBottomTabNavigator(
  {
    // UsersTabを定義
    UsersTab: {
      // screenキーに先ほど定義したUsersNavigatorを設定
      screen: UsersNavigator,
      navigationOptions: {
        // tabBarLabelではフッターに表示するテキストを設定することができる。ここではユーザーリストを表示している
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: `${focused ? '#002f6a' : '#ffffff'}`,
              paddingTop: 5,
            }}
          >
            ユーザーリスト
          </Text>
        ),
        // フッターに表示するアイコンを設定
        tabBarIcon: ({ focused }) => <Icon name="person" color={focused ? '#002f6a' : '#ffffff'} />,
        tabBarOptions: {
          style: {
            height: 65,
            backgroundColor: '#8ce5ff',
            paddingTop: 20,
            paddingBottom: 20,
            shadowColor: '#002f6a',
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
        },
      },
    },
    // ProfileTabを定義
    ProfileTab: {
      // screenキーに先ほど定義したProfileNavigatorを設定
      screen: ProfileNavigator,
      navigationOptions: {
        // tabBarLabelではフッターに表示するテキストを設定することができる。ここではプロフィールを表示している
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: `${focused ? '#002f6a' : '#ffffff'}`,
              paddingTop: 5,
            }}
          >
            プロフィール
          </Text>
        ),
        // フッターに表示するアイコンを設定
        tabBarIcon: ({ focused }) => (
          <Icon name="settings" color={focused ? '#002f6a' : '#ffffff'} />
        ),
        tabBarOptions: {
          style: {
            height: 65,
            backgroundColor: '#8ce5ff',
            paddingTop: 20,
            paddingBottom: 20,
            shadowColor: '#002f6a',
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
        },
      },
    },
  },
  { initialRouteName: 'UsersTab' }
);
// チャットルームではフッターを表示しないための記述
UsersNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
});

