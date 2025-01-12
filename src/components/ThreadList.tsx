import { useState } from 'react';
import { ChatBubbleLeftRightIcon, FunnelIcon } from '@heroicons/react/24/outline';

// Define types for the thread object
interface Thread {
  id: number;
  contact: string;
  platform: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

interface ThreadListProps {
  onSelectThread: (thread: Thread) => void;
}

const mockThreads: Thread[] = [
  { id: 1, contact: 'Alice Johnson', platform: 'WhatsApp', lastMessage: 'Hey, can we discuss the project?', timestamp: '10:30 AM', unread: 2 },
  { id: 2, contact: 'Bob Smith', platform: 'Slack', lastMessage: 'Meeting at 2 PM today', timestamp: 'Yesterday', unread: 0 },
  { id: 3, contact: 'Charlie Brown', platform: 'Telegram', lastMessage: "Don't forget to send the report", timestamp: '2 days ago', unread: 1 },
  { id: 1, contact: 'Mx Jonty', platform: 'WhatsApp', lastMessage: 'Hey, what about the  project?', timestamp: '10:30 AM', unread: 2 },
  { id: 2, contact: 'Kamel Hill', platform: 'Slack', lastMessage: 'Meeting at 6 PM today', timestamp: 'Yesterday', unread: 4 },
  { id: 3, contact: 'Jamie Bron', platform: 'Telegram', lastMessage: "Don't forget to send me the report", timestamp: '2 days ago', unread: 1 }
];

export default function ThreadList({ onSelectThread }: ThreadListProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredThreads = mockThreads.filter((thread) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return thread.unread > 0;
    return thread.platform.toLowerCase() === filter;
  });

  return (
    <div className="w-1/3 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Threads</h3>
        <div className="mt-3 flex items-center">
          <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <select
            className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Platforms</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="slack">Slack</option>
            <option value="telegram">Telegram</option>
            <option value="unread">Unread</option>
          </select>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {filteredThreads.map((thread) => (
          <li
            key={thread.id}
            className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
            onClick={() => onSelectThread(thread)}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-indigo-600 truncate">{thread.contact}</p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {thread.platform}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  <ChatBubbleLeftRightIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {thread.lastMessage}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <p>{thread.timestamp}</p>
                {thread.unread > 0 && (
                  <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {thread.unread}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
