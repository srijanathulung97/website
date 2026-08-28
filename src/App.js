import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import './App.css';
import NoticeTicker from './components/NoticeTicker';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-main">
      <TopBar />
      <Navbar/>
      <NoticeTicker/>
      <Home/>
      <Footer/>
      
    </div>
  );
}