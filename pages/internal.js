import Link from 'next/link';
import { useRouter } from 'next/router';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

import Head from '../components/head';
import Banner from '../components/banner';
import GetInvolved from '../components/get-involved';
import MoreTransactions from '../components/more-transactions';

import styles from '../styles/internal.module.scss';

export default function Internal()
{
	const router = useRouter();

	return (
		<>
			<Head>
				<title>SLP Foundation</title>
			</Head>
			<Navigation />
			<main className={styles.root}>
				<Banner />
				<div className={styles.breadcrumbs}>
					<span>
						<Link href="/" passHref>
							<a title="Home">Home</a>
						</Link>
					</span>
					<span className={styles.breadcrumbArrow}>&gt;</span>
					<span>
						<Link href={router.pathname} passHref>
							<a title="SLP Tokens">SLP Tokens</a>
						</Link>
					</span>
				</div>
				<article className={styles.article}>
					<div className={styles.content}>
						<div className={styles.headingWrapper}>
							<h2 className={styles.heading}>Bringing more transactions on the Bitcoin Cash blockchain.</h2>
						</div>
						<p>
							We are a not for profit entity operating primarily on volunteer work. The beneficiary of our work encompasses all of the Bitcoin Cash community as we build exclusively on the BCH chain. However we strive to provide more benefits to those who participate in the development of SLP.
						</p>
						<p>
							We are a not for profit entity operating primarily on volunteer work. The beneficiary of our work encompasses all of the Bitcoin Cash community as we build exclusively on the BCH chain. However we strive to provide more benefits to those who participate in the development of SLP.
						</p>
						<ul>
							<li>Build your own SLP Token</li>
							<li>Learn more about SLP Tether</li>
							<li>See more projects powered by SLP</li>
							<li>Someting something</li>
						</ul>
						<h3>Interesting Title</h3>
						<p>
							We are a not for profit entity operating primarily on volunteer work. The beneficiary of our work encompasses all of the Bitcoin Cash community as we build exclusively on the BCH chain. However we strive to provide more benefits to those who participate in the development of SLP.
						</p>
						<p>
							We are a not for profit entity operating primarily on volunteer work. The beneficiary of our work encompasses all of the Bitcoin Cash community as we build exclusively on the BCH chain. However we strive to provide more benefits to those who participate in the development of SLP.
						</p>
					</div>
				</article>
				<div className={styles.foot}>
					<GetInvolved simple />
					<MoreTransactions padded />
				</div>
				<aside className={styles.aside}>
					<ul>
						<li>
							<Link href="/about" passHref>
								<a title="About SLP">About SLP</a>
							</Link>
						</li>
						<li>
							<Link href="/token" passHref>
								<a title="SLP Token">SLP Token</a>
							</Link>
						</li>
						<li>
							<Link href="/developers" passHref>
								<a title="Developer">Developer</a>
							</Link>
						</li>
						<li>
							<Link href="/community" passHref>
								<a title="Community">Community</a>
							</Link>
						</li>
						<li>
							<Link href="/resources" passHref>
								<a title="Resources">Resources</a>
							</Link>
						</li>
						<li>
							<Link href="/contact" passHref>
								<a title="Contact">Contact us</a>
							</Link>
						</li>
					</ul>
				</aside>
			</main>
			<Footer />
		</>
	);
}
