import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon, ChartBarIcon, Cog6ToothIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Threads', href: '/', icon: ChatBubbleLeftRightIcon },
  { name: 'Daily Summary', href: '/daily-summary', icon: DocumentTextIcon },
  { name: 'Real-Time Insights', href: '/insights', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <div className={`bg-indigo-700 text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'} flex flex-col h-full`}>
        <div className="flex items-center justify-between p-4">
          <h2 className={`font-semibold text-xl ${isOpen ? 'block' : 'hidden'}`}>Dashboard</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-600 hover:text-white"
            >
              <item.icon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
              <span className={isOpen ? 'block' : 'hidden'}>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className={`mt-auto p-4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="/avatar.jpg" alt="User avatar" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs font-medium text-indigo-300">View Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      
    </div>
  );
}
