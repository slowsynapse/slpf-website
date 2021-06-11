import Link from 'next/link';

import styles from './scss/hero.module.scss';

export default function Hero()
{
	return (

		<div class="w-full">
			<h1 class="font-bold text-white text-3xl ">
				A token economy backed by Proof of Work. We serve to promote and the Simple Ledger Protocol (SLP) on Bitcoin Cash.
			</h1>
			<Link href="/about" passHref>
				<a title="Learn more about SLP foundation">
					<h2 className={styles.subtitle}>Learn more about SLP foundation&nbsp;&#10132;</h2>
				</a>
			</Link>
				<img src="/images/bitcoin-icon.svg" class="h-48"></img>
		</div>

	);
}