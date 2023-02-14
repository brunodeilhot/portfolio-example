import { useEffect, useState } from "react";
import NextPageButton from "../../components/NextPageButton";
import { Quote } from "../../models/quote";
import { getRandomQuote } from "../../services";
import {
  Author,
  Container,
  Content,
  Description,
  Introduction,
  Name,
  QuoteColumn,
  QuoteContainer,
  Subtitle,
} from "./styles";

const Intro = () => {
  const [randomQuote, setRandomQuote] = useState<Quote>();

  useEffect(() => {
    const getQuotes = () =>
      getRandomQuote().then((response) =>
        setRandomQuote({
          content: response.content,
          author: response.author,
        })
      );

    getQuotes();

    const timeout = setInterval(getQuotes, 10000);

    return () => {
      return clearInterval(timeout);
    };
  }, []);

  return (
    <Container>
      <h1>
        <Introduction>Welcome to my portfolio, my name is</Introduction>
        <Name>Zacarias Almeida.</Name>
        <Subtitle>I'm a FullStack Web Developer.</Subtitle>
      </h1>
      <Description>
        I just finished my FullStack course at ETIC in Lisbon and I'm ready to
        start this new journey as a developer. Currently open to new
        oportunities.
      </Description>

      <NextPageButton path="/about" label="Learn more About me" />

      <QuoteContainer>
        <QuoteColumn
          top={Math.floor(Math.random() * 65)}
          left={Math.floor(Math.random() * 60)}
        >
          <Content>{randomQuote?.content}</Content>
          <Author>{randomQuote?.author}</Author>
        </QuoteColumn>
      </QuoteContainer>
    </Container>
  );
};

export default Intro;
