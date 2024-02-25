// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Events() {
  return (
    <div className="section" id="events">
      <Section classProp={`${about.section} borderBottom`}>
        <Container spacing={["verticalXXXLrg"]}>
          <SectionTitle
            title="Events"
            preTitle="Events in the clubs - Technical, Business and Networking"
            subTitle="We host a variety of events, from technical workshops to networking events. We are dedicated to providing a platform for students to learn and explore the field of AI."
          />
          <section className={`${about.content} ${about.container}`}>
            <div className={about.copy}>
              <CopyBlock
                title="Technical Events"
                icon={["fad", "chart-network"]}
                copy="We host a variety of events, like technical workshops. We are dedicated to providing a platform for students to learn and explore the field of AI."
                iconClass={about.icon}
                containerClass={about.container}
              />
              <CopyBlock
                title="Business Events"
                copy="We invite industry professionals to speak about their experiences and the future of AI. We are dedicated to providing a platform for students to learn and explore the field of AI."
                //list={software}
                //block="software"
                //fullContainer="fullContainer"
                icon={["fad", "chart-network"]}
                containerClass={about.container}
                iconClass={about.icon}
              />
              <CopyBlock
                title="Business Events"
                copy="We invite industry professionals to speak about their experiences and the future of AI. We are dedicated to providing a platform for students to learn and explore the field of AI."
                //list={software}
                //block="software"
                //fullContainer="fullContainer"
                icon={["fad", "chart-network"]}
                containerClass={about.container}
                iconClass={about.icon}
              />
            </div>
            <div className={`${about.image} ${about.technicalSvg}`}>
              <Image
                src="/img/dataism-24.svg"
                width={477}
                height={1111}
                alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
              />
            </div>
          </section>
        </Container>
        {/* <SectionGridBg gridSize={4}/> */}
      </Section>
    </div>
  );
}

const software = [
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
];

const tech = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
];
