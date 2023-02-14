import styled from "styled-components";

type TabOptionProps = {
  active: boolean;
};

export const Container = styled.div`
  flex: 0.8 0;
  margin: 50px 0;
`;

export const WorkList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 5%;
  max-width: 70%;
`;

export const TabList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0.2 0;
`;

export const TabOption = styled.button<TabOptionProps>`
  text-align: start;
  background: none;
  border: none;
  padding: 15px 40px;
  color: ${(props) =>
    props.active
      ? props.theme.palette.secondary
      : props.theme.palette.text.primary};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  border-right-width: 10px;
  border-right-style: solid;
  border-color: ${(props) =>
    props.active ? props.theme.palette.primary : "transparent"};
  &:hover {
    color: ${(props) => props.theme.palette.secondary};
    background-color: ${(props) => props.theme.palette.primary};
    opacity: 1;
  }
`;

export const Details = styled.article`
  display: flex;
  flex-flow: column nowrap;
  flex: 0.8 0;
  padding: 20px 40px;
  border-left: 2px solid ${(props) => props.theme.palette.secondary};
`;

export const Time = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const Arrow = styled.span`
  color: ${(props) => props.theme.palette.secondary};
  padding-right: 20px;
`;
