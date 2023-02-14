import { Link, useLocation } from "react-router-dom";
import ThemeButton from "../ThemeButton";
import { Container, Logo, Navigation, NavLabel, NavOption, ResumeButton } from "./styles";

const Header = () => {
  const location = useLocation();

  const navList = [
    {
      name: "< Intro />",
      path: "/",
    },
    {
      name: "< About />",
      path: "/about",
    },
    {
      name: "< Projects />",
      path: "/projects",
    },
    {
      name: "< Work />",
      path: "/work",
    },
  ];

  return (
    <Container>
      <Link to="/">
        <Logo src={require("../../assets/logo.png")} alt="Zacarias Logo" />
      </Link>
      <Navigation>
        {navList.map((item) => (
          <NavOption key={item.name} to={item.path}>
            <NavLabel active={location.pathname === item.path}>
              {item.name}
            </NavLabel>
          </NavOption>
        ))}
        <ThemeButton />
        <ResumeButton href={"React.pdf"}>Resume</ResumeButton>
      </Navigation>
    </Container>
  );
};

export default Header;
