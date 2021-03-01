import Navigation from '../components/navigation';
import Hero from '../components/hero';
import Community from '../components/community';
import Developers from '../components/developers';
import Tokens from '../components/tokens';
import MoreTransactions from '../components/more-transactions';
import ProjectsAndPartners from '../components/projects-and-partners';
import GetInvolved from '../components/get-involved';
import Footer from '../components/footer';

import styles from '../styles/home.module.scss';
import Head from '../components/head';

export default function Home()
{
	return (
		<>
			<Head>
				<title>SLP Foundation</title>
			</Head>
			<Navigation />
			<main className={styles.root}>
				<Hero />
				<Community />
				<Developers />
				<Tokens />
				<MoreTransactions />
				<ProjectsAndPartners />
				<GetInvolved />
			</main>
			<Footer />
		</>
	);
}
