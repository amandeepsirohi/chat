import './apps.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import savedIcon from "./assets/bookmark.svg"
import upgradeIcon from "./assets/rocket.svg"
import home from './assets/home.svg';
import send from './assets/send.svg';
import user_icon from './assets/user-icon.png';
import gpt_logo from './assets/chatgptLogo.svg';
import { send_msg } from './openai';
import {updateState} from 'react';

function App()
{
    const [input , setInput] = updateState("");
    const handle_sent = async () =>{
        const res =  await send_msg(input);
    }
    return (
        <div className='App'>
            <div className="sidebar">
                <div className="upperSide">
                    <div className="upperSideTop">
                        <img src={gptLogo} alt=""  className="Logo"/><span className='brand'>CHAT GPT</span>
                    </div>
                    <button className="midbtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
                    <div className="upperSideBottom">
                        <button className="query"><img src={msgIcon} alt="" />Most Asked Questions</button>
                        <button className="query"><img src={msgIcon} alt="" />Find Something Cool</button>
                    </div>
                </div>
                <div className="lowerSide">
                    <div className="listItems">
                       <img src= {home} alt={home} className="listItemsImg" />Home 
                    </div>
                    <div className="listItems">
                       <img src={savedIcon} alt="" className="listItemsImg" />Saved
                    </div>
                    <div className="listItems">
                       <img src={upgradeIcon} alt="" className="listItemsImg" />Upgrade To Pro
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="chats">
                    <div className="chat">
                        <img className='chat_img' src={user_icon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis blanditiis commodi eos consequuntur cumque repellat voluptate voluptatum ipsum eligendi?</p>
                    </div>
                    <div className="chat bot">
                        <img className='chat_img'  src={gpt_logo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea delectus tempora porro quis consequatur? Sed soluta repellendus perferendis cumque tempora, beatae odio placeat magni quasi officiis exercitationem ex dolor eos aliquid voluptatibus adipisci, voluptate quos id. Impedit pariatur numquam nam illo at quod quisquam exercitationem, omnis aut laborum amet sit, quasi iste excepturi rerum nostrum sunt tenetur facilis qui earum officiis. Quae dolores consequuntur harum ratione aspernatur perferendis corporis magnam incidunt fugiat! Tempora et expedita quia debitis quasi quis amet, necessitatibus veniam officia quo. Neque vero deserunt nisi voluptates consequatur aut beatae, dolorum totam quasi nihil natus sunt incidunt!</p>
                    </div>
                </div>
                <div className="chatFooter">
                    <div className="inp">
                        <input type="text" placeholder='send a query' value={input} onChange={(e)=>{setInput(e.target.value)}} onClick={handle_sent}/> <button className="send"><img src={send} alt="" /></button>
                        
                    </div>
                    <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.</p>
                </div>
            </div>
        </div>
    );
}

export default App;