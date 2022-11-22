import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

const Technologies = React.forwardRef((_, ref) => {
  // TODO move these arrays to database;
  const backendTech = [
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/456px-Microsoft_.NET_logo.svg.png",
      alt: ".Net",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      alt: "NextJS",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      alt: "NodeJS",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/512px-VB.NET_Logo.svg.png?20210603083010",
      alt: "Vb.net",
      url: ""
    },

    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png",
      alt: "PHP",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
      alt: "Java",
      url: ""
    },
  ];

  const frontendTech = [
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
      alt: "ReactJS",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
      alt: "Javascript",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/524px-JQuery-Logo.svg.png?20200715135602",
      alt: "JQuery",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Xamarin-logo.svg",
      alt: "Xamarin",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
      alt: "Android",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      alt: "Bootstrap",
      url: ""
    },
  ];

  const miscTech = [
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      alt: "Docker",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      alt: "Git",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/30/Subversion_logo.svg",
      alt: "Subversion",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",
      alt: "OAuth2.0",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg",
      alt: "Kubernetes",
      url: ""
    },
  ];

  const databases = [
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/800px-MySQL_textlogo.svg.png",
      alt: "MySQL",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
      alt: "PostgresSQL",
      url: ""
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
      alt: "SQLite",
      url: ""
    },
  ];

  const backendTechHtml = generateHtmlFromArr(backendTech);
  const frontendTechHtml = generateHtmlFromArr(frontendTech);
  const databaseTechHtml = generateHtmlFromArr(databases);
  const miscTechHtml = generateHtmlFromArr(miscTech);

  

  return (
    <div className="dark" ref={ref}>
      <Container>
        <Row>
          <Col>
            <h2>
              Technologies I Have Worked With:
            </h2>
          </Col>
        </Row>

        <Row>
          <Col><h5>Backend</h5></Col>
        </Row>
        <Row>
          {backendTechHtml}
        </Row>

        <Row>
          <Col><h5>Frontend</h5></Col>
        </Row>
        <Row>
          {frontendTechHtml}
        </Row>

        <Row>
          <Col><h5>Database</h5></Col>
        </Row>
        <Row>
          {databaseTechHtml}
        </Row>

        <Row>
          <Col><h5>Misc</h5></Col>
        </Row>
        <Row>
          {miscTechHtml}
        </Row>

      </Container>
    </div>
  );
});

export default Technologies;


function generateHtmlFromArr(tech){
  const maxImageHeight = "50px";
  const html = [];

  tech.forEach((tech) => html.push(
    <Col key={uuidv4()}>
      {/* <a href={tech.url}> */}
        <Image height={maxImageHeight} src={tech.imgSrc} alt={`${tech.alt} logo`} title={tech.alt} draggable={false} />
      {/* </a> */}
    </Col>
  ));

  return html;
}