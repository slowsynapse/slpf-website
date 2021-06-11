import Navigation from '../components/navigation';
import Community from '../components/community';
import Developers from '../components/developers';
import Tokens from '../components/tokens';
import MoreTransactions from '../components/more-transactions';
import GetInvolved from '../components/get-involved';
import Footer from '../components/footer';

import styles from '../styles/home.module.scss';
import Head from '../components/head';
import GroupBanner from '../components/group-banner';

export default function Home()
{
	return (
		<div class="max-w-7xl">
			<Head>
				<title>SLP Foundation</title>
			</Head>
			<Navigation />
			<main class="flex flex-col">
				<GroupBanner/>
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
