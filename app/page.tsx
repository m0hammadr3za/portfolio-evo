import getProjects from "../utils/getProjects";
import About from "@/components/About";
import BlurContainer from "@/components/BlurContainer";
import Contact from "@/components/Contact";
import CoverImage from "@/components/CoverImage";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RegularText from "@/components/RegularText";
import Socials from "@/components/Socials";
import st from "@/styles/Home.module.scss";

const Home = () => {
  const projects = getProjects();

  return (
    <div>
      <div className={st["home__background"]}>
        <CoverImage src="/background.jpg" />
      </div>

      <div className={st["home__blur-container"]}>
        <BlurContainer>
          <div className={st["home__content-container"]}>
            <header>
              <Navbar />

              <Intro />
            </header>

            <main>
              <About />

              <Projects data={projects} />

              <Contact />

              <Socials />
            </main>

            <div className={st["home__copyright"]}>
              <RegularText>Designed And Developed By m0hammadr3za</RegularText>
            </div>
          </div>
        </BlurContainer>

        <footer className={st["home__footer"]}>
          <BlurContainer>
            <div className={st["home__footer-text"]}>
              <RegularText>Designed And Developed By m0hammadr3za</RegularText>
            </div>
          </BlurContainer>
        </footer>
      </div>
    </div>
  );
};

export default Home;
