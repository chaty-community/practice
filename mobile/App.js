import React from 'react';
import Navigator from './src/pages/Navigator';
console.disableYellowBox = true;
import urls from "./src/env";
import io from "socket.io-client";
export const socket = io.connect(urls.socket_server);

export default function App() {
  return <Navigator />;
}