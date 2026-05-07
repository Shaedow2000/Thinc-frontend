import { border } from "../../assets/components/border";
import { cardsSection } from "../../assets/components/cardsSection";
import { forDevsSection } from "../../assets/components/forDevs";
import { headerButtons } from "../../assets/components/header";
import { hero } from "../../assets/components/hero";
import { quote } from "../../assets/components/quote";
import { registerLoginSection } from "../../assets/components/registerLoginSection";
import { heading } from "../../assets/components/text";

const landing: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  let subjectsCards: any[] = [
    {
      title: "Simplicity",
      text: `
        No distraction
        Simple UI
        Clear UI
        Clean UX
      `,
    },
    {
      title: "Creativity",
      text: "Our app stores your creativity, transforming them from just ideas to real actions!",
    },
    {
      title: "Security",
      text: "Our app focuses on security of users data.",
    },
    {
      title: "Trust",
      text: "We will never break your trust :)",
    },
  ];

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${hero}
    ${border}
    ${quote}
    ${border}
    ${heading("Out app focuses on:")}
    ${cardsSection(subjectsCards)}
    ${border}
    ${registerLoginSection}
    ${border}
    ${forDevsSection}
  `;
};

export default landing;
