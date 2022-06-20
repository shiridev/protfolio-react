import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CustomNavbar } from "../../components/navbar/customNavbar";
import { Row, Col } from "react-bootstrap";
import sectionOnePortrait from "../../assets/images/sectionOne-portrait.png";
import sectionOneTop from "../../assets/images/sectionOne-top.svg";
import sectionOneBottom from "../../assets/images/sectionOne-bottom.svg";
import "./home.scss";

export const Home = () => {
  const theme = useSelector((state) => state.theme.defaultTheme);

  return (
    <Container fluid className="mainContainer" style={{ backgroundColor: theme.lightGrey }}>
      <Container className="px-0 px-lg-5">
        <CustomNavbar />
        <section className="sectionOne" style={{ backgroundColor: theme.white }}>
          <Row>
            <Col sm={12} md={6}>
              <div className="d-flex align-items-center justify-content-center h-100">
                <img src={sectionOneTop} alt="sectionOne-portrait" className="sectionOne-top d-none d-md-block" />
                <div className="d-flex flex-column align-items-start justify-content-center mx-4 mt-4">
                  <h1 className="fw-bold m-0" style={{ color: theme.carbon }}>
                    Hi! I Am
                  </h1>
                  <h1 className="fw-bold my-3" style={{ color: theme.green }}>
                    Name Lastname
                  </h1>
                  <p className="mb-3" style={{ color: theme.lightCarbon }}>
                    Proficient Frontend Developer & UI/UX Designer
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <h1 className="fw-bold m-0 me-2" style={{ color: theme.green, fontSize: "3em" }}>
                      +5
                    </h1>
                    <div>
                      <p style={{ color: theme.lightCarbon }}>
                        Years
                        <br />
                        Experiences
                      </p>
                    </div>
                  </div>
                </div>
                <img src={sectionOneBottom} alt="sectionOne-portrait" className="sectionOne-bottom d-none d-md-block" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="d-flex align-items-center justify-content-center">
                <img src={sectionOnePortrait} alt="sectionOne-portrait" className="sectionOne-Portrait" />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </Container>
  );
};
