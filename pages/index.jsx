import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'
import Head from 'next/head'

//
export default function HomePage() {

	return (
		<>
			<Head>
				<title>NTUAI Club</title>
				<meta name="description" content="NTU AI Club" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Color colors={colors} />
			<Hero />
			{/* <Looking /> */}
			<FeaturedProjects />
			<About />
			<Technical />
			{/* <Career /> */}
		</>
	);
}