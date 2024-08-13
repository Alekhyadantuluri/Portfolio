import './App.css';
import Navbar from './pages/navbar';
import HeroSection from "./pages/HeroSection"
import Test from './pages/test';
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <HeroSection />
      <Test/>
    </div>
  );
}

export default App;
