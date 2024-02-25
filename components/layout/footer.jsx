import { useState, useEffect } from "react";

import Container from "../structure/container";
import Icon from "../utils/icon.util";

import css from "../../styles/structure/footer.module.scss";

import content from "../../content/footer.json";
import settings from "../../content/_settings.json";

export default function Footer() {
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch(settings.portfolio.repo_api)
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer className={css.container}>
      <Container spacing={["verticalXXLrg", "bottomLrg"]}>
        <section className={css.sections}>
          <ul className={css.thanks}>
            <li>
              <h4>About NTUAI</h4>
            </li>
            <li>
              <p>
                NTU AI Club is a student-led organization at National Taiwan
                University, Taiwan. We are dedicated to providing a platform for
                students to learn and explore the field of AI.
              </p>
            </li>
          </ul>
          <ul className={css.links}>
            <li>
              <h4>Contact</h4>
            </li>
            <li>
              <a href="mailto:hexlabai@gmail.com">
                <p>Email</p>
              </a>
              <p>
                Feel free to reach out to us if you have any questions or would
                like to sponsor us in partnership.
              </p>
            </li>
          </ul>
          <ul className={css.social}>
            <li>
              <h4>Social</h4>
            </li>
            <li className={css.socialList}>
              {content.social.map(({ url, icon }, index) => {
                return (
                  <a key={index} href={url} rel="noreferrer" target="_blank">
                    <Icon icon={["fab", icon]} />
                  </a>
                );
              })}
            </li>
          </ul>
        </section>
      </Container>
      <canvas id="gradient-canvas" className={""} data-transition-in></canvas>
    </footer>
  );
}
