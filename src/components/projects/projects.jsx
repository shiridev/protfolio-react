import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import image1 from "../../assets/images/slide1.jpg";
import image2 from "../../assets/images/slide2.jpg";
import image3 from "../../assets/images/slide3.jpg";
import image4 from "../../assets/images/slide4.jpg";
import image5 from "../../assets/images/slide5.jpg";
import image6 from "../../assets/images/slide6.jpg";
import image7 from "../../assets/images/slide7.jpg";
import image8 from "../../assets/images/slide8.jpg";
import image9 from "../../assets/images/slide9.jpg";
import image10 from "../../assets/images/slide10.jpg";
import "./projects.scss";
import { SiReact, SiRedux, SiHtml5, SiBootstrap, SiAdobexd, SiFlutter, SiDart } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

export const Projects = () => {
  const theme = useSelector((state) => state.theme.defaultTheme);

  const images = [
    {
      src: image1,
      techs: [
        <SiAdobexd color={theme.type === "light" ? "#470137" : "#ff61f6"} />,
        <SiReact color="#00D8FF" />,
        <SiRedux color="#8338EC" />,
        <SiHtml5 color="#ff5400" />,
        <FaSass color="#ef476f" />,
        <SiBootstrap color="#8338EC" />,
      ],
    },
    {
      src: image2,
      techs: [
        <SiAdobexd color={theme.type === "light" ? "#470137" : "#ff61f6"} />,
        <SiHtml5 color="#ff5400" />,
        <FaSass color="#ef476f" />,
        <SiBootstrap color="#8338EC" />,
        <DiJavascript color="#ffd60a" />,
      ],
    },
    {
      src: image4,
      techs: [<SiAdobexd color={theme.type === "light" ? "#470137" : "#ff61f6"} />, <SiFlutter color="#4cc9f0" />, <SiDart color="#4cc9f0" />],
    },
    {
      src: image5,
      techs: [<SiAdobexd color={theme.type === "light" ? "#470137" : "#ff61f6"} />, <SiFlutter color="#4cc9f0" />, <SiDart color="#4cc9f0" />],
    },
    {
      src: image9,
      techs: [
        <SiAdobexd color={theme.type === "light" ? "#470137" : "#ff61f6"} />,
        <SiReact color="#00D8FF" />,
        <SiRedux color="#8338EC" />,
        <SiHtml5 color="#ff5400" />,
        <FaSass color="#ef476f" />,
        <SiBootstrap color="#8338EC" />,
      ],
    },
    {
      src: image10,
      techs: [<SiAdobexd color={theme.type === "light" ? "#470137" : "#ff61f6"} />, <SiFlutter color="#4cc9f0" />, <SiDart color="#4cc9f0" />],
    },
  ];

  return (
    <Row className="g-3 px-3">
      {images.map((image) => {
        return (
          <Col sm={6} md={4}>
            <div
              className="projectCardContainer p-3"
              style={{ border: `1px solid ${theme.lightGrey}`, backgroundColor: theme.type === "light" ? "white" : theme.lightGrey }}
            >
              <img src={image.src} alt="" />
              <div className="d-flex align-items-center flex-wrap">
                {image.techs.map((techIcon) => {
                  return (
                    <div className="techIcon me-3 mt-3" style={{ backgroundColor: theme.type === "light" ? theme.lightGrey : theme.white }}>
                      {techIcon}
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
