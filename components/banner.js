import styles from './scss/banner.module.scss';

export default function Banner()
{
	return (
		<div className={styles.root}>
			<h1 className={styles.heading}>SLP Tokens</h1>
			<img src="https://via.placeholder.com/150x90" className={styles.image} />
		</div>
	);
}