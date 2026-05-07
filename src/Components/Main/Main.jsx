import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets/assets';
function Main() {
	return (
		<div className='main'>
			<div className='nav'>
				<p>Gemini</p>
				<img src={assets.user_icon} alt=''/>
			</div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello , Dev</span></p>
                    <p>How can I Help You Today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on a upcoming road trip</p>
                        <img src={assets.compass_icon}/>
                    </div>
                    <div className="card">
                        <p>Breifly summarize this concept : urban planning</p>
                        <img src={assets.bulb_icon}/>
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding activites for our work retreat</p>
                        <img src={assets.message_icon}/>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon}/>
                    </div>
                </div>
            </div>
		</div>
	)
}

export default Main