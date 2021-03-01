import Link from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './scss/get-involved.module.scss';

export default function GetInvolved({ simple })
{
	return (
		<section className={clsx(styles.root, simple && styles.padded)}>
			{ simple ? null : <img src="https://via.placeholder.com/250x200" className={styles.image} /> }
			<div className={styles.wrapper}>
				<div>
					<h3 className={styles.heading}>Get involved with SLP</h3>
				</div>
				<p className={styles.text}>
					SLP Foundation was established in 2019 as a non profit organization. We are commited to th. Lorem ipsum dolor sit amet, consectetuer.
				</p>
				<Link href="/about" passHref>
					<a title="Become a member" className={styles.link}>
						Become a member&nbsp;&#10132;
					</a>
				</Link>
				<Link href="/donate" passHref>
					<a title="Make a donation" className={clsx(styles.link, styles.ghostLink)}>
						Make a donation&nbsp;&#10132;
					</a>
				</Link>
			</div>
		</section>
	);
}

GetInvolved.propTypes = {
	simple: PropTypes.bool
};