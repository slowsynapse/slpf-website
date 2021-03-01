import styles from './scss/tokens.module.scss';
import Link from 'next/link';

export default function Tokens()
{
	return (
		<section className={styles.root}>
			<div className={styles.wrapper}>
				<div>
					<h3 className={styles.heading}>SLP Tokens</h3>
				</div>
				<ul className={styles.list}>
					<li>Why create tokens with SLP?</li>
					<li>How to start using SLP today?</li>
					<li>SLP featured projects</li>
					<li>SLP token bounties</li>
				</ul>
				<Link href="/about" passHref>
					<a title="Learn more about SLP tokens" className={styles.link}>
						Learn more about SLP tokens&nbsp;&#10132;
					</a>
				</Link>
			</div>
		</section>
	);
}