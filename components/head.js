import NextHead from 'next/head';

export default function Head({ children })
{
	return (

		<NextHead>
			{ children }
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<link rel="stylesheet" href="/fonts/gilroy/gilroy.css" />
		</NextHead>

	);
}