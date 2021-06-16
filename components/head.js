import NextHead from 'next/head';

export default function Head({ children })
{
	return (

		<NextHead>
			{ children }
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<link refl="preload" href={process.env.PUBLIC_URL + "/fonts/gilroy/Gilroy-Light.ttf"} as="font" crossOrigin=""/>
			<link refl="preload" href={process.env.PUBLIC_URL + "/fonts/gilroy/Gilroy-Regular.ttf"} as="font" crossOrigin=""/>
			<link refl="preload" href={process.env.PUBLIC_URL + "/fonts/gilroy/Gilroy-Bold.ttf"} as="font" crossOrigin=""/>
			<link refl="preload" href={process.env.PUBLIC_URL + "/fonts/gilroy/Gilroy-Heavy.ttf"} as="font" crossOrigin=""/>
			<link refl="preload" href={process.env.PUBLIC_URL + "/fonts/gilroy/Gilroy-Medium.ttf"} as="font" crossOrigin=""/>
		</NextHead>

	);
}