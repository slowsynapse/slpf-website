import styles from './scss/footer.module.scss';
import Link from 'next/link';

export default function Footer()
{
	return (
		<footer className={styles.root}>
			<ul className={styles.links}>
				<li>
					<Link href="/about" passHref>
						<a title="About SLP">
							About SLP&nbsp;&gt;
						</a>
					</Link>
				</li>
				<li>
					<Link href="/about" passHref>
						<a title="SLP Token">
							SLP Token&nbsp;&gt;
						</a>
					</Link>
				</li>
				<li>
					<Link href="/about" passHref>
						<a title="Developer">
							Developer&nbsp;&gt;
						</a>
					</Link>
				</li>
				<li>
					<Link href="/about" passHref>
						<a title="Community">
							Community&nbsp;&gt;
						</a>
					</Link>
				</li>
				<li>
					<Link href="/about" passHref>
						<a title="Contact">
							Contact&nbsp;&gt;
						</a>
					</Link>
				</li>
			</ul>
			<div className={styles.copy}>SLP Foundation &copy; 2020 All rights reserved</div>
		</footer>
	);
}