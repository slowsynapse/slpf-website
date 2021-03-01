import styles from './scss/developers.module.scss';
import Link from 'next/link';

export default function Developers()
{
	return (
		<section className={styles.root}>
			<h3 className={styles.heading}>Developers</h3>
			<p className={styles.text}>
				We are a not for profit entity operating primarily on volunteer work. The beneficiary of our work encompasses all of the Bitcoin Cash community.
			</p>
			<Link href="/about" passHref>
				<a title="SLP for developers" className={styles.link}>
					SLP for developers&nbsp;&#10132;
				</a>
			</Link>
		</section>
	);
}