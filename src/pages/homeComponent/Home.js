import "./Home.css";
import LandingContent from "../../components/landing/landing";
import Carousel from "../../components/carousel/carousel";
import Collections from "../../components/collection/collection";
import Artists from "../../components/artist/artist";
import Container from "../../animation/animation";
import StatCounter from "../../components/statcounter/counter";

const HomeComponent = () => {
  window.scrollTo({ top: 0 });
  return (
    <>
      <Container componentToPassDown={<LandingContent />} />
      <Container componentToPassDown={<StatCounter />} />
      <Container
        componentToPassDown={<Carousel />}
        className="componentContainer"
      />
      <Container
        componentToPassDown={<Collections className="componentContainer" />}
      />
      <Container
        componentToPassDown={<Artists />}
        className="componentContainer"
      />
    </>
  );
};
export default HomeComponent;
