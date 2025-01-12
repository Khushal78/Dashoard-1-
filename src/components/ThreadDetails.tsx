import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface Thread {
  contact: string;
  platform: string;
}

const mockMessages = [
  { id: 1, sender: 'Alice Johnson', content: 'Hey, can we discuss the project?', timestamp: '10:30 AM', platform: 'WhatsApp' },
  { id: 2, sender: 'You', content: 'Sure, what do you want to know?', timestamp: '10:32 AM', platform: 'WhatsApp' },
  { id: 3, sender: 'Alice Johnson', content: 'I was wondering about the timeline for the next phase.', timestamp: '10:35 AM', platform: 'WhatsApp' },
  { id: 4, sender: 'Alice Johnson', content: 'Hey, can we discuss the project?', timestamp: '10:30 AM', platform: 'WhatsApp' },
  { id: 5, sender: 'You', content: 'Sure, what do you want to know?', timestamp: '10:32 AM', platform: 'WhatsApp' },
  { id: 6, sender: 'Alice Johnson', content: 'I was wondering about the timeline for the next phase.', timestamp: '10:35 AM', platform: 'WhatsApp' },
];

export default function ThreadDetails({ thread }: { thread: Thread }) {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{thread.contact}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{thread.platform}</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs mx-4 py-2 px-4 rounded-lg ${
                message.sender === 'You' ? 'bg-indigo-100 text-indigo-900' : 'bg-white text-gray-900'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PaperAirplaneIcon className="h-5 w-5 mr-2" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
