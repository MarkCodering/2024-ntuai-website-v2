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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
	<div className="section" id="about">
    <Section classProp={about.section} >
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Us"
          preTitle="NTUAI"
          subTitle="We are a group of passionate students who are dedicated to providing a platform for students to learn and explore the field of AI."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img
              src="/img/background-1.jpg"
              alt="NTUAI"
              width="600"
              height="800"
            />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Technical and Networking Events"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="We host a variety of events, from technical workshops to networking events. We are dedicated to providing a platform for students to learn and explore the field of AI."
            />
            <BadgesBlock
              title="Technical Projects and Mentorship"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="We are dedicated to providing a platform for students to learn and explore the field of AI with the help of experienced mentors on building practical projects."
              invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
	</div>
  );
}

const methods = [
  { key: "robot", name: "Deep Learning", type: "fas" },
  { key: "laptop-code", name: "Machine Learning", type: "fas" },
  { key: "network-wired", name: "Computer Vision", type: "fas" },
  { key: "microchip", name: "Natural Language Processing", type: "fas" },
  { key: "laptop", name: "Full-stack Web Development", type: "fas" },
];
