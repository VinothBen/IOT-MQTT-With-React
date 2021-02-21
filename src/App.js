import React from 'react';
import HookMqtt from './components/Hook/';
import Header from './components/Header/';
// import ClassMqtt from './components/Class/';
import './App.css';
import {AccountBalanceRounded, PowerSettingsNewRounded, Settings, KeyboardArrowRight} from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <div className="menu-slider">
        <span className="menu-slider-arrow"><KeyboardArrowRight /></span>
      </div>
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <HookMqtt view="dashboard"/>
      </div>
      {/* Hook or Class */}
      {/* <ClassMqtt /> */}
    </div>
  );
}

export default App;
