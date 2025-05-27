import React, { useState, useEffect, useRef } from 'react';

function FirebaseChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "أهلاً! كيف أقدر أساعدك؟", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // دالة للتمرير لأسفل تلقائياً عند وصول رسالة جديدة
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), text: input.trim(), sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // بعد 1.5 ثانية، يرد البوت تلقائياً
    setTimeout(() => {
      const botReply = { id: Date.now() + 1, text: 'شكرًا لرسالتك، كيف أقدر أساعدك أكثر؟', sender: 'bot' };
      setMessages(prev => [...prev, botReply]);
    }, 1500);
  };

  // إرسال الرسالة عند الضغط على Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <div style={{flex: 1, overflowY: 'auto', padding: '10px', backgroundColor: '#f4f4f4'}}>
        {messages.map(msg => (
          <div key={msg.id} style={{ 
            textAlign: msg.sender === 'user' ? 'right' : 'left', 
            margin: '8px 0' 
          }}>
            <span style={{ 
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: '20px',
              backgroundColor: msg.sender === 'user' ? '#ff69b4' : '#ddd',
              color: msg.sender === 'user' ? 'white' : 'black',
              maxWidth: '70%',
              wordWrap: 'break-word'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="اكتب رسالتك..."
          style={{ width: '80%', padding: '8px', borderRadius: '20px', border: '1px solid #ccc' }}
        />
        <button
          onClick={sendMessage}
          style={{ marginLeft: '8px', padding: '8px 16px', borderRadius: '20px', backgroundColor: '#ff69b4', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          إرسال
        </button>
      </div>
    </div>
  );
}

export default FirebaseChat;
