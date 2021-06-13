import Navigation from '../components/navigation';
import ProjectsAndPartners from "../components/projects-and-partners";
import Footer from '../components/footer';
import GenericBlockContent from '../components/factory/GenericBlockContent';
import ButtonGroup from '../components/factory/ButtonGroup';
import styles from '../styles/home.module.scss';
import GenericList from '../components/factory/GenericList';
import Head from '../components/head';
import HeroBanner from '../components/hero-banner';
import newStyles from '../components/scss/tokens.module.scss';

export default function Home()
{
	const contentListSideBar=[
		{label: "WHY CREATE TOKENS WITH SLP?"},
		{label: "HOW TO START USING SLP TODAY"},
		{label: "USE CASES FOR SLP TOKENS"},
		{label: "SLP TOKEN VS ERC-20 TOKEN"}
	  ]
	return (
		<div className="overflow-x-hidden grid-cols-2">
			<Head>
				<title>SLP Foundation</title>
			</Head>
			<Navigation />
			<main className="flex flex-col">
				<HeroBanner/>
				<ProjectsAndPartners />
				<div className="grid grid-cols-2">
					<GenericBlockContent
						containerBlockClasses={`flex-col p-10`}
						label={"Community"}
						labelClasses={"bg-green-100 font-bold text-4xl w-max mb-5"}
						description={"Simple for the masses to use. SLP is used\
						for most well-known token projects in\
						Bitcoin Cash. We have a thriving community\
						of token users and fans, and everything\
						from stablecoins to NFTs."}
						tailwindRule="py-20 px-48 bg-gray-200"
						descriptionClasses={"mb-3"}
						buttonGroup={
						<ButtonGroup
							label={'MORE ABOUT SLP COMMUNITY'}
							linkOne={"/"}
							firstButtonClasses={'font-bold py-2 border-b-8 border-green-500 w-max'}
						/>
						}
						buttonGroupClasses={"mt-2"}
					/>
					<GenericBlockContent
						containerBlockClasses={`flex-col p-10`}
						label={"Developer"}
						labelClasses={"bg-green-100 font-bold w-max text-4xl mb-5"}
						description={"Lightweight. Plug and Play. Low Barrier\
						of Entry. SLP borrows from the evolving\
						BCH scripting capabilities, as well as\
						offering its own grass-root SLP\
						technological advancements. "}
						tailwindRule="px-48 py-20 bg-gray-300"
						descriptionClasses={"mb-3"}
						buttonGroup={
						<ButtonGroup
							label={'SEE RESOURCES & LINKS'}
							linkOne={"/"}
							firstButtonClasses={'font-bold py-2 border-b-8 border-green-500 w-max'}
						/>
						}
						buttonGroupClasses={"mt-2"}
					/>
				</div>
				<div className="grid grid-cols-2">
					<GenericBlockContent
						containerBlockClasses={`flex-col p-10 ${newStyles.rootThird}`}
						label={"About SLP Tokens"}
						labelClasses={"bg-white font-bold text-4xl ml-8 w-max mb-5"}
						description={<GenericList contentListSideBar={contentListSideBar} contentListClasses={"my-3 py-2 ml-4 font-bold bg-white "}/>}
						tailwindRule="py-20 px-48"
						descriptionClasses={"mb-3"}
						buttonGroup={
						<ButtonGroup
							label={'LEARN MORE ABOUT SLP TOKEN'}
							linkOne={"/"}
							firstButtonClasses={'font-bold py-2 bg-page-primary focus:outline-none focus:bg-green-700 hover:bg-green-700'}
						/>
						}
						buttonGroupClasses={"mt-2"}
					/>
					<GenericBlockContent
						containerBlockClasses={`flex-col p-10`}
						label={<>
							<span className="bg-green-100 font-bold text-4xl mb-8">
							Bringing projects like U
							</span>
							<span className="bg-green-100 font-bold text-4xl mb-8">
							SDT to the Bitcoin Cash
							</span>
							<span className="bg-green-100 font-bold text-4xl mb-8">
							&nbsp; Blockchain
							</span>
						</>}
						labelClasses={"mb-6"}
						description={"SLP’s technology acts as a ledger on the\
						Bitcoin Cash blockchain, so it shares all the\
						security offered by the miners running the\
						SHA256 hashing algorithm."}
						tailwindRule="px-48 py-20"
						descriptionClasses={"mb-6"}
						buttonGroup={
						<ButtonGroup
							label={'LEARN MORE ABOUT PROJECTS ON SLP'}
							linkOne={"/"}
							firstButtonClasses={'font-bold py-2 border-b-8 border-green-500 w-max'}
						/>
						}
						buttonGroupClasses={"mt-2"}
					/>
				</div>
				<div className="grid grid-cols-2">
					<GenericBlockContent
						containerBlockClasses={`flex-col w-2/5 ${styles.rootSecond}`}
						label={"Get involved"}
						labelClasses={"bg-white font-bold text-green-350 text-4xl w-3/5 mb-5"}
						description={"SLP Foundation is a non-profit organisation open to all. We are commited to having a transparent\
						framework and community so that various stakeholders can see their voices turn into action\
						"}
						descriptionClasses={"mb-3"}
						buttonGroup={
						<ButtonGroup
							label={'TELEGRAM'}
							secondLabel={'EMAIL'}
							linkOne={"/"}
							linkTwo={"/"}
							firstButtonClasses={'font-bold py-2 bg-page-primary focus:outline-none focus:bg-green-700 hover:bg-green-700'}
							secondButtonClasses={'font-bold border-4 bg-white border-page-primary py-2 mt-3 focus:outline-none focus:border-green-700 hover:border-green-700'}
						/>
						}
						buttonGroupClasses={"mt-2"}
					/>
					<GenericBlockContent
						containerBlockClasses={`flex-col p-10 ${newStyles.rootThird}`}
						label={"Get involved"}
						labelClasses={"bg-white font-bold text-green-350 text-4xl ml-8 w-max mb-5"}
						description={"SLP Foundation is a non-profit organisation\
							open to all. We are commited to having a\
							transparent framework and community so that\
							various stakeholders can see their voices turn\
							into action." }
						tailwindRule=" px-48"
						descriptionClasses={"mb-3"}
						buttonGroup={
						<ButtonGroup
							label={'TELEGRAM'}
							secondLabel={'EMAIL'}
							linkOne={"/"}
							linkTwo={"/"}
							firstButtonClasses={'font-bold py-2 bg-page-primary focus:outline-none focus:bg-green-700 hover:bg-green-700'}
							secondButtonClasses={'font-bold border-4 bg-white border-page-primary py-2 mt-3 focus:outline-none focus:border-green-700 hover:border-green-700'}
						/>
						}
						buttonGroupClasses={"mt-2"}
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}