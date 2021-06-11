import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsAndPartners()
{
	const buildLoader = ({ src,width,quality}) => {
		
	}

	return (
		<section class="flex justify-around w-full h-37_6 bg-white" >
				<Image src="/images/icons/coinflex-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/spice-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/sideshift-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/coinex-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/IFwallet-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/zapit-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/badger-icon.svg" width={175} height={50}></Image>
				<Image src="/images/icons/electron-icon.svg" width={175} height={50}></Image>
				{/* <img src="/images/icons/coinflex-icon.svg" class="w-200"/>
				<img src="/images/icons/spice-icon.svg" class=""/>
				<img src="/images/icons/sideshift-icon.svg" class=""/>
				<img src="/images/icons/coinex-icon.svg" class=""/>
				<img src="/images/icons/IFwallet-icon.svg" class=""/>
				<img src="/images/icons/zapit-icon.svg" class=""/>
				<img src="/images/icons/badger-icon.svg" class=""/>
				<img src="/images/icons/electron-icon.svg" class=""/> */}
		</section>
	);
} 