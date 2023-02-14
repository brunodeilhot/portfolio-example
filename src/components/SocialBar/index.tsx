import { useState } from "react";
import { useTheme } from "styled-components";
import Email from "../../icons/Email";
import Github from "../../icons/Github";
import Linkedin from "../../icons/LinkedIn";
import Twitter from "../../icons/Twitter";
import {
  ArrowImage,
  Container,
  SocialContainer,
  SocialMediaButton,
} from "./styles";

const SocialBar = () => {
  const theme = useTheme();

  const [hover, setHover] = useState<string>();

  const iconColor = (name: string) =>
    hover === name ? theme.palette.secondary : theme.palette.text.primary;

  const socialLinks = [
    {
      name: "twitter",
      path: "https://twitter.com/",
      icon: <Twitter fillColor={iconColor("twitter")} />,
    },
    {
      name: "linkedin",
      path: "https://www.linkedin.com",
      icon: <Linkedin fillColor={iconColor("linkedin")} />,
    },
    {
      name: "github",
      path: "https://github.com",
      icon: <Github fillColor={iconColor("github")} />,
    },
    {
      name: "email",
      path: "mailto:zacarias.almeida@fakemail.com",
      icon: <Email fillColor={iconColor("email")} />,
    },
  ];

  return (
    <Container>
      <SocialContainer>
        {socialLinks.map((social, index) => (
          <SocialMediaButton
            key={social.name}
            href={social.path}
            onMouseEnter={() => setHover(socialLinks[index].name)}
            onMouseLeave={() => setHover(undefined)}
          >
            {social.icon}
          </SocialMediaButton>
        ))}

        <ArrowImage src={require("../../assets/arrow.png")} alt="arrow" />
      </SocialContainer>
    </Container>
  );
};

export default SocialBar;
