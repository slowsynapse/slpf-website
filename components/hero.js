import Link from 'next/link';
import Image from 'next/image';

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
			<Image src="/images/bitcoin-icon.svg" width={100} height={100}></Image>
		</div>

	);
}