import styles from './scss/footer.module.scss';
import Link from 'next/link';

export default function Footer()
{
	return (
		<footer className={`${styles.root} `}>
			<ul className={styles.links}>
				<li className="font-gilroyLight">
					<Link href="/slp-foundation" passHref>
						<a title="About SLP">
							SLP FOUNDATION &nbsp;&gt;
						</a>
					</Link>
				</li>
				<li className="font-gilroyLight">
					<Link href="/slp-tokens" passHref>
						<a title="SLP Token">
							SLP Tokens &nbsp;&gt;
						</a>
					</Link>
				</li>
				<li className="font-gilroyLight">
					<Link href="/project-tokens" passHref>
						<a title="Developer">
							Projects & Tokens &nbsp;&gt;
						</a>
					</Link>
				</li>
				<li className="font-gilroyLight">
					<Link href="/ressources-links" passHref>
						<a title="Community">
							Resources &nbsp;&gt;
						</a>
					</Link>
				</li>
			</ul>
			<div className={`${styles.copy} font-gilroyMedium`}>SLP Foundation &copy; 2021 All rights reserved</div>
		</footer>
	);
}