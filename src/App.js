import './App.css';
import Navbar from './pages/navbar';
import HeroSection from "./pages/HeroSection"
// // import Test from './pages/test';
import Recommendations from './pages/recomendations';
// import Skills from './pages/skills';
import Footer from './pages/footer'
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <HeroSection />
      <Recommendations/>
      {/* <Skills/> */}
      {/* <Test/> */}
      <Footer/>
    </div>
  );
}

export default App;
