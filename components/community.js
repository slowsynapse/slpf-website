import styles from './scss/community.module.scss';
import Link from 'next/link';

export default function Community()
{
	return (
		<section className={styles.root}>
			<h3 className={styles.heading}>Community</h3>
			<p className={styles.text}>
				We are a not for profit entity operating primarily on volunteer work. The beneficiary of our work encompasses all of the Bitcoin Cash community.
			</p>
			<Link href="/about" passHref>
				<a title="More about SLP community" className={styles.link}>
					More about SLP community&nbsp;&#10132;
				</a>
			</Link>
		</section>
	);
}