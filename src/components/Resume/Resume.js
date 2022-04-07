import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="DataBase Developer Intern - CHU Ibn Sina RABAT, MOROCCO"
              date="July 2020 - August 2020"
              content={[
                "Reverse Engineering SQL Server DataBase using SQL Server Management Studio (SSMS)",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Software Engineering - ENSIAS, MOROCCO"
              date="2020 - Present"
              content={["Option : software"]}
            />
            <Resumecontent
              title="DEUG - University sidi mohamed ben Abdellah - TAZA"
              date="2018 - 2020"
              content={["Option : Mathematics and Computer science"]}
            />
            <Resumecontent
              title="BAC - AlKindi high school TAZA, MOROCCO"
              date="2018"
              content={["Option : Mathematical Sciences",
                        "Mention : 'trés bien'"          
            ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
