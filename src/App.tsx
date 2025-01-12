import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ThreadList from './components/ThreadList';
import DailySummary from './daily-summary/page';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<ThreadList onSelectThread={(thread) => console.log(thread)} />} />
            <Route path="/daily-summary" element={<DailySummary />} />
            <Route path="/insights" element={<h1>Real-Time Insights</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
