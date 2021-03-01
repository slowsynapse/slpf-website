import Link from 'next/link';

import styles from './scss/hero.module.scss';

export default function Hero()
{
	return (

		<div className={styles.root}>
			<h1 className={styles.heading}>
				Not-for-Profit Organistion that serves to promote the Simple Ledger Protocol (SLP) &amp; Bitcoin Cash.
			</h1>
			<Link href="/about" passHref>
				<a title="Learn more about SLP foundation">
					<h2 className={styles.subtitle}>Learn more about SLP foundation&nbsp;&#10132;</h2>
				</a>
			</Link>
			<img src="/images/bitcoin-icon.svg" className={styles.image} />
		</div>

	);
}