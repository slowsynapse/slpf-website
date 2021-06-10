import Link from 'next/link';
import Image from 'next/image'

export default function ProjectsAndPartners()
{
	return (
		<section class="flex justify-around w-full h-36 bg-gradient-to-r from-green-400 via-green-300" >
				<Image src="/images/icons/coinflex-icon.svg" width={175} height={50} fill={'black'}></Image>
				<Image src="/images/icons/spice-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/sideshift-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/coinex-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/IFwallet-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/zapit-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/badger-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/electron-icon.svg" width={175} height={50}></Image>
		</section>
	);
}