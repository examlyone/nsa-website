'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const predefinedTags = [
    'CMA', 'CPA', 'CA', 'CFA',
    'Chat/Call', 'Next Batch',
    'Login Issue', 'Option / Fees/Help',
  ];

  const handleTagClick = (tag: string) => {
    setMessages(prev => [...prev, tag]);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setMessages(prev => [...prev, inputValue]);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <div
          className="fixed bottom-5 right-2 w-12 h-12 rounded-full border-2 border-white shadow-md cursor-pointer overflow-hidden z-50"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/images/Girl image.png"
            alt="Chat"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-[320px] sm:w-[360px] bg-white rounded-xl shadow-lg z-50 border border-gray-300 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
            <div className="flex items-center gap-2">
              <Image
                src="/images/Girl image.png"
                alt="Assistant"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-medium text-sm">Aisha</span>
              <span className="w-2 h-2 bg-green-500 rounded-full ml-1"></span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white bg-red-500 hover:bg-red-600 text-xs px-2 py-1 rounded"
            >
              End Chat
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex flex-col gap-2 px-3 py-2 text-sm overflow-y-auto max-h-[200px]">
            <div className="self-start bg-gray-100 p-2 rounded-lg max-w-[80%]">I am here to help 😊</div>
            <div className="self-start bg-gray-100 p-2 rounded-lg max-w-[80%]">Let me know your question.</div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className="self-end bg-blue-500 text-white p-2 rounded-lg max-w-[80%]"
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="px-3 py-2 text-sm flex flex-wrap gap-2 border-t">
            {predefinedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700 border"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your query"
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-[#d41c1c] text-white px-3 py-2 rounded-md text-sm"
              >
                Send
              </button>
            </div>
          </div>

          {/* <button
            onClick={() => setIsOpen(false)}
            className="absolute mb-5 -bottom-5 right-5 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-xl shadow-md"
          >
            ✕
          </button> */}
        </div>
      )}
      
    </>
  );
}
