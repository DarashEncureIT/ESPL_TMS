import React from 'react'
import "./MsgHistory.css"

export const MsgHistory = ({msg}) => {
    if(!msg) return null;
  return msg.map((row,i)=>(
  <div key={i} className='msg-history'>
  <div className="send">
      <div className="sender">{row.messageBy}</div>
      <div className="date">{row.date}</div>
  </div>
  <div style={{margin:"10px"}} className="message">{row.message}</div>
</div>));
    
  
}
