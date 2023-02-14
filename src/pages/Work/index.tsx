import { useState } from "react";
import {
  TabList,
  Container,
  Details,
  TabOption,
  WorkList,
  Time,
  Arrow,
  DetailsRow,
} from "./styles";

const Work = () => {
  const [selected, setSelected] = useState(0);

  const workHistory = [
    {
      company: "Amazing IT",
      title: "Front End Developer",
      time: "January 2022 - Present",
      details: [
        "Write amazing code",
        "Work with JavaScript and React",
        "Implemented new idea that improved performance",
      ],
    },
    {
      company: "Continente",
      title: "Retail Operator",
      time: "May 2020 - December 2021",
      details: [
        "Added new ideas that helped improve team performance and sales",
        "Working directly with the clients helped me improve my communication skills and emotional intelligence",
      ],
    },
    {
      company: "Restaurante Amélia",
      title: "Waiter",
      time: "April 2019 - April 2020",
      details: [
        "Added new ideas that helped improve team performance and sales",
        "Working directly with the clients helped me improve my communication skills and emotional intelligence",
      ],
    },
  ];

  return (
    <Container>
      <h2>() {"==>"} My work journey</h2>
      <WorkList>
        <TabList>
          {workHistory.map((workHistory, index) => (
            <TabOption
              key={index}
              onClick={() => setSelected(index)}
              active={index === selected}
            >
              {workHistory.company}
            </TabOption>
          ))}
        </TabList>

        <Details>
          <h3>{workHistory[selected].title}</h3>
          <Time>{workHistory[selected].time}</Time>
          {workHistory[selected].details.map((detail, index) => (
            <DetailsRow key={index}>
              <Arrow>{"==>"}</Arrow>
              <p>{detail}</p>
            </DetailsRow>
          ))}
        </Details>
      </WorkList>
    </Container>
  );
};

export default Work;
