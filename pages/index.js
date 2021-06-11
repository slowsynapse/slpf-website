import Navigation from '../components/navigation';
import ProjectsAndPartners from "../components/projects-and-partners";
import Community from '../components/community';
import Developers from '../components/developers';
import Tokens from '../components/tokens';
import MoreTransactions from '../components/more-transactions';
import GetInvolved from '../components/get-involved';
import Footer from '../components/footer';

import styles from '../styles/home.module.scss';
import Head from '../components/head';
import HeroBanner from '../components/hero-banner';

export default function Home()
{
	return (
		<div className="overflow-x-hidden grid-cols-2">
			<Head>
				<title>SLP Foundation</title>
			</Head>
			<Navigation />
			<main className="flex flex-col">
				<HeroBanner/>
				<ProjectsAndPartners />
				<Community />
				<Developers />
				<Tokens />
				<MoreTransactions />
				<GetInvolved />
			</main>
			<Footer />
		</div>
	);
}