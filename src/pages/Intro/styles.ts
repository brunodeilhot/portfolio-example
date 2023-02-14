import styled from "styled-components";

type QuoteProps = {
  top: number;
  left: number;
};

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0.8 0;
  margin: 50px 0;
`;

export const Introduction = styled.span`
  display: block;
  font-size: 1rem;
  padding-bottom: 30px;
`;

export const Name = styled.span`
  display: block;
  font-size: 4.5rem;
  padding-bottom: 10px;
`;

export const Subtitle = styled.span`
  font-size: 1.6rem;
`;

export const Description = styled.p`
  margin: 60px 0;
  max-width: 700px;
  line-height: 1.8rem;
`;

export const QuoteContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1 1 auto;
  max-width: 90%;
`;

export const QuoteColumn = styled.div<QuoteProps>`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  display: flex;
  flex-flow: column nowrap;
  max-width: 50%;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 5.01s alternate infinite;
`;

export const Content = styled.p``;

export const Author = styled.i`
  align-self: flex-end;
  font-size: 14px;
`;
