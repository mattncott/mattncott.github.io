import { Container, Row, Col, Image } from 'react-bootstrap';
import CountUp from 'react-countup'

import './style.scss';

function Profile({aboutClick}) {

    function calculateAge(date) {
        var ageDifMs = Date.now() - date;
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const startDateAsDeveloper = new Date();
    startDateAsDeveloper.setFullYear(2017, 4, 1);

  return (
    <Container className="profile vertical-center fadein">
        <Row>
            <Col sm={false} lg={3}></Col>
            <Col>
                <Row>
                    <Col xs={2} lg={2}>
                        <Image className="dropshadow" src="https://avatars.githubusercontent.com/u/12718540?v=4" alt="Matt Nethercott Profile Picture" draggable={false} fluid={true} roundedCircle={true} />
                    </Col>
                    <Col xs={10} lg={9}>
                        <Row>
                            <Col>
                                <h1 className="title dropshadow">Hi! I'm Matt.</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="dropshadow">
                                    Full Stack Developer. Currently working with <code>.Net</code> and <code>ReactJS</code>. 
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className="no-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthewnethercott/"><span className="butn hover animation butn-lightblue">LinkedIn</span></a>
                    </Col>
                    <Col>
                        <span className="butn butn-paleorange" onClick={aboutClick}>About Me</span>
                    </Col>
                    <Col>
                        <a className="no-link" target="_blank" rel="noreferrer" href="https://github.com/mattncott"><span className="butn butn-lightgreen">Github</span></a>
                    </Col>
                    <Col>
                        <a className="no-link" target="_blank" rel="noreferrer" href="https://www.runbritainrankings.com/runners/profile.aspx?athleteid=946818"><span className="butn butn-purple">Runner</span></a>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            <h3>
                                <CountUp className="dropshadow" start={0} end={calculateAge(startDateAsDeveloper)} />
                            </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col><small className="dropshadow">Years Experience</small></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

    </Container>
  );
}

export default Profile;
