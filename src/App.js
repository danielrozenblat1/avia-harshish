import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import Timeline from './components/steps/Steps';
import PlayerColumns from './components/columns/Columns';
import AboutMe from './components/me/Me';
import { useEffect, useState } from 'react';
import Recommends from './components/recommends/Recommends';
import SecondScreen from './screens/SecondScreen';
import ByMe from './components/ByMe/ByMe';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import { FloatingPhoneButton, FloatingWhatsAppButton } from './components/FloatingButtons/Floating';
import FormScreen from './components/form/FormScreen';
import PrivacyPolicy from './components/privacy/Privacy';

function App() {
  
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <ForthScreen/>

  <PlayerColumns/>
  <AboutMe/>
  <Timeline/>

  <Recommends/>
  <ThirdScreen/>
  <SecondScreen/>
  <FloatingWhatsAppButton />
      <FloatingPhoneButton />
      <PrivacyPolicy 
  ownerName="אביה הרשיש" 
  email="Aviarc100@gmail.com" 
  phone="+972 52-260-5557" 
  domain="https://avia-arch.co.il/" 
/>
  <ByMe/>
  </>
}

export default App;
