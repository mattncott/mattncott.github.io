import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import React, { useRef } from "react";
import { Container } from 'react-bootstrap';
import Mountains from './Components/Mountains';
import Profile from './Components/Profile';
import About from './Components/About';
import Technologies from './Components/Technologies';

function App() {
  const ref = useRef(null);
  const aboutRef = useRef(null);

  const handleTechScrollClick = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleAboutClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <div style={{height: "100vh"}}>
        <Mountains />
        <Container style={{
          margin: "0 auto"
        }}>
          <Profile aboutClick={handleAboutClick} />
        </Container>
      </div>
      <div className="website">
        <About ref={ref} techScrollClick={handleTechScrollClick}/>
        <Technologies ref={aboutRef} />
      </div>
    </>
  );
}

export default App;
