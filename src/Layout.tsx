import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './globals.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <HelmetProvider>
      {/* Adding metadata */}
      <Helmet>
        <title>Century of Best Dashboard</title>
        <meta name="description" content="Unified communication dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Global font and layout structure */}
      <div className="flex h-screen bg-gray-100" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            {children}
          </main>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Layout;
