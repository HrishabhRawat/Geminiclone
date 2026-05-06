import React from 'react';
import './SideBar.css';
import { assets } from '../../assets/assets/assets';

function SideBar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <img className="menu" src={assets.menu_icon}/>
            <div className='new-chat'>
                <img src={assets.plus_icon}/>
                <p>New Chat</p>
            </div>
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                <div className='recent-entry'>
                    <img src={assets.message_icon}/>
                    <p>What is react ...</p>
                </div>
            </div>
        </div>
        <div className='bottom'>

        </div>
    </div>
  )
}

export default SideBar