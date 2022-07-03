import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  SiDribbble,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiBootstrap,
  SiAntdesign,
  SiFlutter,
  SiAdobexd,
  SiNpm,
  SiDart,
} from "react-icons/si";
import { TbBrandLinkedin, TbBrandSkype } from "react-icons/tb";
import { DiJavascript } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { useSelector } from "react-redux";
import sectionOnePortrait from "../../assets/images/sectionOne-portrait.png";
import sectionOneTop from "../../assets/images/sectionOne-top.svg";
import { MyParticles } from "../../components/myParticles/myParticles";
import { CustomNavbar } from "../../components/navbar/customNavbar";
import { TechCard } from "../../components/techCard/techCard";
import "./home.scss";

export const Home = () => {
  const theme = useSelector((state) => state.theme.defaultTheme);

  return (
    <Container fluid className="mainContainer" style={{ backgroundColor: theme.lightGrey }}>
      <MyParticles opacity={theme.type === "dark" ? 1 : 0} />
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
                      +110
                    </h1>
                    <div>
                      <p style={{ color: theme.lightCarbon }}>
                        Years
                        <br />
                        Experiences
                      </p>
                    </div>
                  </div>
                  <ul className="socialLinksContainer mt-4">
                    <li>
                      <a href="mailto:shiri.mohammadhossein@gmail.com" style={{ backgroundColor: theme.lightGrey }}>
                        <MdOutlineAlternateEmail color={theme.green} size="1.2em" />
                      </a>
                    </li>
                    <li className="ms-3">
                      <a href="https://wa.me/+989130186483" style={{ backgroundColor: theme.lightGrey }}>
                        <AiOutlineWhatsApp color={theme.green} size="1.2em" />
                      </a>
                    </li>
                    <li className="ms-3">
                      <a href="https://join.skype.com/invite/BQD75pUgjVWu/" style={{ backgroundColor: theme.lightGrey }}>
                        <TbBrandSkype color={theme.green} size="1.2em" />
                      </a>
                    </li>
                    <li className="ms-3">
                      <a href="https://www.linkedin.com/in/shiridev/" style={{ backgroundColor: theme.lightGrey }}>
                        <TbBrandLinkedin color={theme.green} size="1.2em" />
                      </a>
                    </li>
                    <li className="ms-3">
                      <a href="https://github.com/shiridev/" style={{ backgroundColor: theme.lightGrey }}>
                        <FiGithub color={theme.green} size="1.2em" />
                      </a>
                    </li>
                    <li className="ms-3">
                      <a href="https://dribbble.com/shiridev/" style={{ backgroundColor: theme.lightGrey }}>
                        <SiDribbble color={theme.green} size="1.2em" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <img src={sectionOneBottom} alt="sectionOne-portrait" className="sectionOne-bottom d-none d-md-block" /> */}
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="d-flex align-items-center justify-content-center">
                <motion.div
                  initial={{ scale: 0.9, rotate: 5, opacity: 0, y: 20 }}
                  animate={{ rotate: 0, scale: 1, y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 40,
                  }}
                >
                  <img src={sectionOnePortrait} alt="sectionOne-portrait" className="sectionOne-Portrait" />
                </motion.div>
              </div>
            </Col>
          </Row>
          <Row className="g-3 px-3 mb-3">
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiReact color="#00D8FF" size="2em" />} color="#00D8FF" name="React" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiRedux color="#8338EC" size="2em" />} color="#8338EC" name="Redux" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiHtml5 color="#ff5400" size="2em" />} color="#ff5400" name="Html5" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiCss3 color="#3a86ff" size="2em" />} color="#3a86ff" name="Css3" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<FaSass color="#ef476f" size="2em" />} color="#ef476f" name="Sass" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<DiJavascript color="#ffd60a" size="2em" />} color="#ffd60a" name="JavaScript" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiJquery color="#4361ee" size="2em" />} color="#4361ee" name="JQuery" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiBootstrap color="#8338EC" size="2em" />} color="#8338EC" name="Bootstrap" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiAntdesign color="#4895ef" size="2em" />} color="#4895ef" name="Ant Design" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiFlutter color="#4cc9f0" size="2em" />} color="#4cc9f0" name="Flutter" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard icon={<SiDart color="#3b28cc" size="2em" />} color="#3b28cc" name="Dart" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <TechCard
                icon={<SiAdobexd color={theme.type === "light" ? "#470137" : "#ff61f6"} size="2em" />}
                color={theme.type === "light" ? "#470137" : "#ff61f6"}
                name="Adobe XD"
              />
            </Col>
          </Row>
        </section>
      </Container>
    </Container>
  );
};
