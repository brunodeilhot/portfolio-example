import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
  padding: 15px;
  border: 2px solid ${(props) => props.theme.palette.secondary};
  border-radius: 5px;
  background: none;
  color: ${(props) => props.theme.palette.secondary};
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.palette.primary};
  }
`;
