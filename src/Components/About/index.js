import React, { useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

import alexaPaper from "../../pdfs/Alexa_Paper.pdf";
import dissertation from "../../pdfs/eHealth_Passport.pdf";


const About = React.forwardRef((props, ref) => {

  const projectsRef = useRef(null);
  const techScrollClick = props.techScrollClick;

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div id="section1" ref={ref}>
      <Container>
        <div className="fadein">
          <Row>
            <Col>
              <h2>
                About Me:
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
                <p>
                  Hi, I'm Matt! I am a full stack developer. I am currently working with .Net and ReactJS however, I have worked with a wide range of technologies in the past. Checkout {" "}
                  <span className="link" onClick={techScrollClick}>what I've worked with</span> or my <span className="link" onClick={scrollToProjects}>projects</span> to learn more!
                </p>
                <p>
                  I currently work for Blue Prism as a Junior Developer. To find out more, checkout my <a href="https://www.linkedin.com/in/matthewnethercott/">LinkedIn</a>.
                </p>
                <p>
                  I have a love for running, cycling, and hiking. If it's the weekend I can often be found at parkrun, on a long run, exploring with my dog.
                </p>
            </Col>
          </Row>
        </div>

        <div className="fadein">
          <Row>
            <Col>
              <h2>
                Publications
              </h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <ul className="publications">
                <li>
                  <p>Nethercott, M., Blanchard, A., Gilbert, L., & Dawson, T. <a href={alexaPaper} target="_blank" rel="noreferrer">Minimising false alerts in telecare with the use of Augmented Communication Technologies</a> 5th International Conference on Interactive Digital Media (Accepted for Springer Long Paper Publication, December 2018). Presented paper at the 5th International Conference on Interactive Digital Media (ICIDM 2018)</p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="fadein" ref={projectsRef}>
          <Row>
            <Col>
              <h2>
                Projects
              </h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <ul className="projects">
                <li>
                  <p><a href={dissertation} target="_blank" rel="noreferrer">Delivering health passports using location based QR codes</a>: Undergraduate Dissertation using Xamarin, PHP, and MySQL.</p>
                </li>
                <li>
                  <p><a href="https://intellitrain.duckdns.org" target="_blank">IntelliTrain</a>A dashboard for athletes to analyse training data synced via Strava v3 API.</p>
                </li>
                <li>
                  <p><b>Marathon Training Planner</b>: A sport training scheduler predominately used for marathon training that assesses current ability to detect overtraining. Uses ReactJS and Postgresql.</p>
                </li>
                <li>
                  <p><a href="https://github.com/mattncott/running-calculations" target="_blank" rel="noreferrer">Running Calculations NPM library</a>: Javascript calculations for runners. Adapted from Jack Daniels tables.</p>
                </li>
                <li>
                  <p><a href="https://github.com/mattncott/burger-bot" target="_blank" rel="noreferrer">Discord Bot</a>: Discord bot written with discord.io to detect whether spoilered images contain objects. Uses Tensorflow to classify images.</p>
                </li>
                <li>
                  <p><b>Smart home automations</b>: Building smart home automations for Home Assistant running off of a Raspberry PI. I am using MQTT and Mosquitto for messaging between Zigbee devices</p>
                </li>
                <li>
                  <p><a href="https://github.com/mattncott/mattncott.github.io" target="_blank" rel="noreferrer">Portfolio Website</a>: This website, used to show case what I can do.</p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
});

export default About;
