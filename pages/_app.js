import "../styles/globals.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameIntroduce from './components/GameIntroduce/GameIntroduce';
import PlayGame from './PlayGame/components/PlayGame';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
