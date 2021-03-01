import styles from './scss/projects-and-partners.module.scss';
import Link from 'next/link';

export default function ProjectsAndPartners()
{
	return (
		<section className={styles.root}>
			<img src="/images/green-elements-4.svg" className={styles.greenDot} />
			<img src="/images/green-elements-1.svg" className={styles.greenTop} />
			<img src="/images/green-elements-3.svg" className={styles.greenWave} />
			<img src="/images/green-elements-2.svg" className={styles.greenBottom} />
			<h3 className={styles.heading}>Projects &amp; Partners</h3>
			<div className={styles.grid}>
				<img src="/images/icons/coinex-icon.svg" />
				<img src="/images/icons/spice-icon.svg" />
				<img src="/images/icons/sideshift-icon.svg" />
				<img src="/images/icons/coinex-icon.svg" />
				<img src="/images/icons/IFwallet-icon.svg" />
				<img src="/images/icons/zapit-icon.svg" />
				<img src="/images/icons/badger-icon.svg" />
				<img src="/images/icons/electron-icon.svg" />
			</div>
			<Link href="/about" passHref>
				<a title="See all SLP projects" className={styles.link}>
					See all SLP projects&nbsp;&#10132;
				</a>
			</Link>
		</section>
	);
}