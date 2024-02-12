import { useState, useEffect } from "react";

import Recent from "../../components/sections/articles/recent";

import Color from "../../components/utils/page.colors.util";

import colors from "../../content/articles/_colors.json";
import settings from "../../content/_settings.json";
import Head from "next/head";

//
export default function About({ mediumArticles }) {
  return (
    <>
      <Head>
        <title>About | NTUAI</title>
      </Head>
      <Color colors={colors} />
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center">About</h1>
		<p className="text-lg text-center">
		  NTUAI is a student-led organization at Nanyang Technological University
		  that aims to promote and nurture the interest of students in the field
		  of Artificial Intelligence. We are a group of passionate students who
		  are dedicated to providing a platform for students to learn and
		  explore the field of AI.
		  </p>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=59"
  );

  console.log(settings.username.medium);

  const [mediumRSS] = await Promise.all([
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`
    ),
  ]);

  let [mediumArticles] = await Promise.all([mediumRSS.json()]);

  return { props: { mediumArticles } };
}
