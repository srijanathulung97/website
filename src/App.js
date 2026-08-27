import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import './App.css';
import NoticeTicker from './components/NoticeTicker';

export default function App() {
  return (
    <div className="app-main">
      <TopBar />
      <Navbar/>
      <NoticeTicker/>
      
    </div>
  );
}