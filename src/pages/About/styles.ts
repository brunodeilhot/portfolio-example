import styled from "styled-components";

export const Container = styled.div`
  flex: 0.8 0;
  margin: 50px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 50px;
`;

export const AboutMe = styled.section`
  flex: 0.5 0;
  line-height: 1.8rem;
`;

export const PhotoContainer = styled.div`
  flex: 0.5 0;
  display: flex;
  justify-content: flex-start;
  padding-left: 5%;
`;

export const Photo = styled.img`
  border: 5px solid ${(props) => props.theme.palette.secondary};
  border-radius: 5px;
  width: 250px;
  height: 250px;
`;
