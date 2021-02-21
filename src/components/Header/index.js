import React, {useState} from 'react';
import {AccountBalanceRounded, PowerSettingsNewRounded, Settings, 
    KeyboardArrowRight, ChangeHistoryTwoTone, Cancel} from '@material-ui/icons';
import { Popover } from '@material-ui/core';
import HookMqtt from '../Hook/';

function MainHeader(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    console.log("...props", props);
  return (
        <>
        <div className="app-detail">
          {/* <span className="header-menu"><MenuTwoTone fontSize="large" /></span> */}
          <span className="header-logo"><AccountBalanceRounded /></span>
          <span className="app-name">MQTT Association</span>
          <span className="breadcrum-container">
            <span className="breadcrum">Dashboard</span>
          </span>
        </div>
        <div className="user-detail">
          <span className="user-name">Name: Electrometer</span>
          <span className="user-settings" onClick={handleClick}>{ !open ? <Settings /> : <Cancel />}</span>
          <span className="log-out"><PowerSettingsNewRounded /></span>
        </div>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            style={{top: "20px"}}
        >   
            <div className="overlay-header">
                <span className="overlay-header-logo"><Settings /></span>
                <span className="overlay-header-name">User Settings</span></div>
                <span className="overlay-header-arrow"><ChangeHistoryTwoTone /></span>
            <div className="overlay-body">
                <HookMqtt view="settings"/>
            </div>
      </Popover>
      </>
  );
}

export default MainHeader;