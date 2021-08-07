//ライブラリを読み込む
import React from 'react';
//Navigator.jsでエクスポートしたNavigatorを読み込んでいる。.jsは省略可能。
import Navigator from './src/pages/Navigator';
console.disableYellowBox = true;
//App関数が定義されている。
//App関数が実行されるとreturnの中身が返される。
//returnの中身が画面に描画される。
export default function App() {
  //return の中にNavigatorを記述することで画面にNavigatorを描画している。
  //return()の()は中身が１行であれば省略することができる。
  return <Navigator />;
}

