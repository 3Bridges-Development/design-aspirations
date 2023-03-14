import './App.css';
import Navigation from './components/Navigation';
import { Outlet } from "react-router-dom";
import WelcomeBanner from './components/WelcomeBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      {window.location.href.endsWith("/") ? (
        <WelcomeBanner />
      ) : (
        null
      )}
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
