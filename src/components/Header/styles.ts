import { Link } from "react-router-dom";
import styled from "styled-components";

type NavLabelProps = {
  active: boolean;
};

export const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const NavOption = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
`;

export const NavLabel = styled.span<NavLabelProps>`
  color: ${(props) =>
    props.active
      ? props.theme.palette.secondary
      : props.theme.palette.text.primary};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.palette.secondary};
  }
`;

export const ResumeButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-left: 20px;
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
