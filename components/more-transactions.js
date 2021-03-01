import Link from 'next/link';
import clsx from 'clsx';

import styles from './scss/more-transactions.module.scss';

export default function MoreTransactions({ padded })
{
	return (
		<section className={clsx(styles.root, padded && styles.padded)}>
			<div>
				<h3 className={styles.heading}>Bringing more transactions on the Bitcoin Cash blockchain.</h3>
			</div>
			<p className={styles.text}>
				We are a not for profit entity operating primarily on volunteer work. The beneficiary of our work encompasses all of the Bitcoin Cash community.
			</p>
			<Link href="/about" passHref>
				<a title="Learn more about SLP foundation" className={styles.link}>
					Learn more about SLP foundation&nbsp;&#10132;
				</a>
			</Link>
		</section>
	);
}