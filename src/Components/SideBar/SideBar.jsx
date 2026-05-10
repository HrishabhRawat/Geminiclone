import React, { useCallback, useContext, useState } from 'react';
import './SideBar.css';
import { assets } from '../../assets/assets/assets';
import { Context } from '../../context/Context';




function SideBar() {

    const [extended, setExtended] = useState(false);
    const {onSent, previousPrompt, setRecentPrompt, newChat} = useContext(Context);


    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt);

        await onSent(prompt);
    }

  return (
    <div className='sidebar'>
        <div className='top'>
            <img className="menu" onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon}/>
            <div onClick={()=>newChat()} className='new-chat'>
                <img src={assets.plus_icon}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                {
                    previousPrompt.map((item, index)=>{
                        return (
                            <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                                <img src={assets.message_icon}/>
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        )
                    })
                }
                
            </div>
            :null
            }
            
        </div>
        <div className='bottom'>
            <div className='bottom-icon recent-entry'>
                <img src={assets.question_icon}/>
                {extended?<p>Help</p>:null}
            </div>
            <div className='bottom-icon recent-entry'>
                <img src={assets.history_icon}/>
                {extended?<p>Activity</p>:null}
            </div>
            <div className='bottom-icon recent-entry'>
                <img src={assets.setting_icon}/>
                {extended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default SideBar