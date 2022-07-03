import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../assets/json/particles.json";
import "./myParticles.scss";

export const MyParticles = (props) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesConfig} style={{ opacity: props.opacity }} />;
};
