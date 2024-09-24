import { useState } from 'react';
import './App.css';
import Mouse from './Mouse/Mouse';
import Navbar from './Navbar/Navbar';
import { Provider } from "react-redux";
import store from './store';
import Hero from './Hero/Hero';
import Experience from './Screens/Experience/Experience';
import Achievements from './Screens/Achievements/Achievements';
import Contact from './Screens/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Mouse />
        <Navbar />
        <Hero />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
