import NextPageButton from "../../components/NextPageButton";
import { AboutMe, Container, Photo, PhotoContainer, Row } from "./styles";

const About = () => {
  return (
    <Container>
      <h2>() {"==>"} About me</h2>

      <Row>
        <AboutMe>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nemo at ipsam minima incidunt fugit magnam assumenda facere,
            veritatis, iure provident veniam eos dolor, explicabo tempore iste
            voluptatem vitae perspiciatis?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            dicta quidem blanditiis voluptates corrupti, impedit tempora enim
            similique illum tempore architecto aspernatur non cumque consectetur
            reprehenderit iusto dolorum ad nostrum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            dicta quidem blanditiis voluptates corrupti, impedit tempora enim
            similique illum tempore architecto aspernatur non cumque consectetur
            reprehenderit iusto dolorum ad nostrum.
          </p>
        </AboutMe>

        <PhotoContainer>
          <Photo src={require("../../assets/zacarias.jpg")} />
        </PhotoContainer>
      </Row>

      <NextPageButton path="/projects" label="Look at my Projects" />
    </Container>
  );
};

export default About;
