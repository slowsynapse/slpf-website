import { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './scss/navigation.module.scss';

export default function Navigation()
{
	const [open, setOpen] = useState(false);
	const [visible, setVisible] = useState(false);
	const toggleMenu = useCallback(() => {
		if(!open)
		{
			setVisible(true);
			setTimeout(() => setOpen(true), 1);
		}
		else
		{
			setOpen(false);
			setTimeout(() => setVisible(false), 200);
		}
	});

	useEffect(() => {
		if(typeof document === 'undefined') return;

		const html = document.getElementsByTagName("html")[0];
		if(!html) return;

		html.style.overflowY=open ? "hidden" : "auto";
	}, [open]);

	return (
		<nav className={styles.root}>
			<Link href="/" passHref>
				<a title="SLP Foundation">
					<img src="/images/logo-sample.png" className={styles.logo} />
				</a>
			</Link>
			<img src="/images/hamburger.png" className={styles.hamburger} onClick={toggleMenu} />
			<ul className={clsx(styles.links, open && styles.linksOpen, visible && styles.linksVisible)}>
				<li>
					<Link href="/about" passHref>
						<a title="About SLP">
							About SLP <span className={styles.arrow}>&gt;</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/tokens" passHref>
						<a title="SLP Tokens">
							SLP Tokens <span className={styles.arrow}>&gt;</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/developers" passHref>
						<a title="Developer">
							Developer <span className={styles.arrow}>&gt;</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/community" passHref>
						<a title="Community">
							Community <span className={styles.arrow}>&gt;</span>
						</a>
					</Link>
				</li>
				<li className={styles.button}>
					<a href="#" title="Make a donation">
						Make a donation
					</a>
				</li>
			</ul>
		</nav>
	);
}