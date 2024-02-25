// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Specing util
import Spacing from "../../utils/spacing.util";

// Section general blocks
import SectionGridBg from "../../blocks/section.grid.block";
import SectionTitle from "../../blocks/section.title.block";

// Section scss
import looking from "../../../styles/sections/index/looking.module.scss";
import section from "../../../styles/blocks/section.title.module.scss";

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 *
 * @returns {jsx} <Looking />
 */
export default function Looking() {
  return (
    <Section classProp={`${looking.section} borderBottom`}>
      <Container
        classProp={`${section.title} ${looking.container}`}
        spacing={["verticalXXXLrg"]}
      >
        <h4>
          We are currently looking for new members from the National Taiwan
          University system.
        </h4>
        <h2 className={looking.json}>
          Students from NTU interested in AI with{" "}
        </h2>
        <h2 className={looking.json}>
          <span className={looking.highlight}>Passion</span>
        </h2>
        <h2 className={looking.json}>
          <span className={looking.highlight}>Curiosity</span>
        </h2>
        <h2 className={looking.json}></h2>
        <h4>We welcome all students from all departments to join us.</h4>
        {/* <h2>Senior <span className={looking.highlight}>User Experience</span> Designer</h2> */}
        {/* <p className="subtitle">with a focus on Product Design.</p> */}
      </Container>
    </Section>
  );
}
