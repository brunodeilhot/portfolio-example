import NextPageButton from "../../components/NextPageButton";
import {
  Column,
  Container,
  Description,
  Image,
  ImageContainer,
  Project,
  ProjectList,
  Tech,
  TechGroup,
  Title,
} from "./styles";

const Projects = () => {
  const projectList = [
    {
      name: "Amazing website",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptate iure fugit inventore quos voluptatibus? Aperiam provident repudiandae optio a at rem magni. Quasi sequi repellendus inventore dignissimos, voluptatem quaerat?",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com",
      image: require("../../assets/project.png"),
    },
    {
      name: "Amazing website",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptate iure fugit inventore quos voluptatibus? Aperiam provident repudiandae optio a at rem magni. Quasi sequi repellendus inventore dignissimos, voluptatem quaerat?",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com",
      image: require("../../assets/project.jpg"),
    },
    {
      name: "Amazing website",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptate iure fugit inventore quos voluptatibus? Aperiam provident repudiandae optio a at rem magni. Quasi sequi repellendus inventore dignissimos, voluptatem quaerat?",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com",
      image: require("../../assets/project.png"),
    },
    {
      name: "Amazing website",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptate iure fugit inventore quos voluptatibus? Aperiam provident repudiandae optio a at rem magni. Quasi sequi repellendus inventore dignissimos, voluptatem quaerat?",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com",
      image: require("../../assets/project.jpg"),
    },
  ];

  return (
    <Container>
      <h2>() {"==>"} What I've built</h2>

      <ProjectList>
        {projectList.map((project, index) => (
          <Project key={index}>
            <ImageContainer>
              <Image src={project.image} />
            </ImageContainer>
            <Column>
              <Title>{project.name}</Title>
              <Description>{project.description}</Description>
              <TechGroup>
                {project.tech.map((tech) => (
                  <Tech key={tech}>{tech}</Tech>
                ))}
              </TechGroup>
            </Column>
          </Project>
        ))}
      </ProjectList>

      <NextPageButton path="/work" label="Check my Work journey" />
    </Container>
  );
};
export default Projects;
