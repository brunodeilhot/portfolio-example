import styled from "styled-components";

export const Container = styled.div`
  flex: 0.8 0;
  margin: 50px 0;
  padding-bottom: 50px;
`;

export const ProjectList = styled.div`
  max-width: 70%;
  margin-bottom: 50px;
`;

export const Project = styled.article`
  display: flex;
  flex-flow: row nowrap;
  padding: 50px 0;
`;

export const ImageContainer = styled.div`
  flex: 0.6 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Column = styled.div`
  flex: 0.4 0;
  display: flex;
  flex-flow column nowrap;
  justify-content: flex-end;
`;

export const Title = styled.h3`
  text-align: end;
  padding-right: 20px;
`;

export const Description = styled.p`
  text-align: end;
  line-height: 1.5em;
  margin-left: -40%;
  background-color: ${(props) => props.theme.palette.primary};
  padding: 20px;
  border-radius: 5px;
`;

export const TechGroup = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  list-style-type: none;
  padding-right: 20px;
`;

export const Tech = styled.li`
  padding-left: 10px;
`;
