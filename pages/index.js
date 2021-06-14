import Navigation from "../components/navigation";
import ProjectsAndPartners from "../components/projects-and-partners";
import Footer from "../components/footer";
import GenericBlockContent from "../components/factory/GenericBlockContent";
import ButtonGroup from "../components/factory/ButtonGroup";
import styles from "../styles/home.module.scss";
import GenericList from "../components/factory/GenericList";
import Head from "../components/head";
import GroupBanner from "../components/hero-banner";
import newStyles from "../components/scss/tokens.module.scss";

export default function Home() {
  const contentListSideBar = [
    { label: "WHY CREATE TOKENS WITH SLP?" },
    { label: "HOW TO START USING SLP TODAY" },
    { label: "USE CASES FOR SLP TOKENS" },
    { label: "SLP TOKEN VS ERC-20 TOKEN" },
  ];
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Head>
        <title>SLP Foundation</title>
      </Head>
      <Navigation />
      <main className="flex flex-col">
        <GroupBanner />
        <ProjectsAndPartners />
        <div className="mx-auto z-20">
          <div className="md:grid md:grid-cols-2">
            <GenericBlockContent
              containerBlockClasses={`container md:p-10 xl:p-0 xl:pl-44 xl:py-10`}
              label={"Community"}
              labelClasses={
                "bg-page-secondary font-bold text-4xl px-1 block max-w-max mb-5 font-gilroyBold"
              }
              description={
                "Simple for the masses to use. SLP is used\
						for most well-known token projects in\
						Bitcoin Cash. We have a thriving community\
						of token users and fans, and everything\
						from stablecoins to NFTs."
              }
              tailwindRule="p-16 bg-gray-primary"
              descriptionClasses={"mb-3 font-gilroyLight"}
              buttonGroup={
                <ButtonGroup
                  label={"MORE ABOUT SLP COMMUNITY"}
                  linkOne={"/"}
                  firstButtonClasses={
                    "font-gilroyBold py-2 border-b-8 border-page-primary w-max"
                  }
                />
              }
              buttonGroupClasses={"mt-2"}
            />
            <GenericBlockContent
              containerBlockClasses={`container md:p-10 xl:p-0 xl:pr-44 xl:py-10`}
              label={"Developers"}
              labelClasses={
                "bg-page-secondary font-bold text-4xl px-1 block max-w-max mb-5 font-gilroyBold"
              }
              description={
                "Lightweight. Plug and Play. Low Barrier\
						of Entry. SLP borrows from the evolving\
						BCH scripting capabilities, as well as\
						offering its own grass-root SLP\
						technological advancements. "
              }
              tailwindRule="p-16 bg-gray-secondary"
              descriptionClasses={"mb-3 font-gilroyLight"}
              buttonGroup={
                <ButtonGroup
                  label={"SEE RESOURCES & LINKS"}
                  linkOne={"/"}
                  firstButtonClasses={
                    "font-gilroyBold py-2 border-b-8 border-page-primary w-max"
                  }
                />
              }
              buttonGroupClasses={"mt-2"}
            />
          </div>
        </div>
        <div className="container max-w-screen-1440p mx-auto mb-16">
          <div className="md:grid md:grid-cols-2">
            <GenericBlockContent
              containerBlockClasses={`flex flex-col p-10  ${newStyles.rootThird}`}
              label={"About SLP Tokens"}
              labelClasses={
                "  bg-white font-bold text-4xl ml-8 self-center mb-5 px-1 block max-w-max font-gilroyBold "
              }
              description={
                <GenericList
                  contentListSideBar={contentListSideBar}
                  contentListClasses={"my-2 py-2 ml-4 bg-white font-gilroyMedium"}
                />
              }
              tailwindRule="md:p-16 xl:pr-36 xl:p-0 xl:py-16 "
              descriptionClasses={"mb-2 font-gilroyMedium"}
              buttonGroup={
                <ButtonGroup
                  label={"LEARN  MORE  ABOUT  SLP  TOKEN"}
                  linkOne={"/"}
                  firstButtonClasses={
                    "font-gilroyBold py-2 bg-page-primary focus:outline-none focus:bg-green-700 hover:bg-green-700"
                  }
                />
              }
              buttonGroupClasses={"mt-2"}
            />
            <GenericBlockContent
              containerBlockClasses={`p-10`}
              label={
                <>
                  <span className="bg-page-secondary font-bold text-4xl px-1 block max-w-max font-gilroyBold">
                    Bringing projects like
                  </span>
                  <span className="bg-page-secondary font-bold text-4xl px-1 block max-w-max font-gilroyBold">
                    USDT to the Bitcoin Cash
                  </span>
                  <span className="bg-page-secondary font-bold text-4xl px-1 block max-w-max font-gilroyBold">
                    Blockchain
                  </span>
                </>
              }
              labelClasses={"mb-4 md:w-120"}
              description={
                "SLP’s technology acts as a ledger on the\
						Bitcoin Cash blockchain, so it shares all the\
						security offered by the miners running the\
						SHA256 hashing algorithm."
              }
              tailwindRule="md:p-16 xl:justify-end xl:items-center xl:flex xl:p-0"
              descriptionClasses={"mb-4 leading-6 font-gilroyLight"}
              buttonGroup={
                <ButtonGroup
                  label={"LEARN MORE ABOUT PROJECTS ON SLP"}
                  linkOne={"/"}
                  firstButtonClasses={
                    "font-bold font-gilroyMedium py-2 border-b-8 border-page-primary w-max"
                  }
                />
              }
              buttonGroupClasses={"mt-2"}
            />
            <div className="flex md:justify-end xl:w-full justify-items-center">
              <div className="relative bg-image-primary md:w-imageWidth md:h-imageHeight xl:h-imageHeightXLScreen xl:w-full overflow-hidden">
                <div className="absolute -right-16">
                  <img
                    src="/images/green-elements-1.svg"
                    width={280}
                    height={280}
                  />
                </div>
                <div className="absolute top-24 left-40">
                  <img
                    src="/images/green-elements-4.svg"
                    width={140}
                    height={140}
                  />
                </div>
                <div className="absolute -bottom-1">
                  <img
                    src="/images/green-elements-3.svg"
                    width={480}
                    height={480}
                  />
                </div>
              </div>
            </div>
            <GenericBlockContent
              containerBlockClasses={`flex-col md:p-10 xl:p-14 p-4 w-full ${newStyles.rootThird} md:h-imageHeight  xl:h-imageHeightXLScreen`}
              label={"Get involved"}
              labelClasses={
                "bg-white font-bold text-page-primary text-4xl mb-5 px-1 block max-w-max mt-5 md:mt-0 ml-5 md:ml-0 font-gilroyBold"
              }
              description={
                "SLP Foundation is a non-profit organisation\
								open to all. We are commited to having a\
								transparent framework and community so that\
								various stakeholders can see their voices turn\
								into action."
              }
              tailwindRule="flex flex-col justify-center" 
              descriptionClasses={"mb-3 font-gilroyLight"}
              buttonGroup={
                <ButtonGroup
                  label={"TELEGRAM"}
                  secondLabel={"EMAIL"}
                  linkOne={"/"}
                  linkTwo={"/"}
                  firstButtonClasses={
                    "font-bold py-2 bg-page-primary focus:outline-none focus:bg-green-700 hover:bg-green-700 font-gilroyBold"
                  }
                  secondButtonClasses={
                    "font-bold border-4 font-gilroyBold bg-white border-page-primary py-2 mt-3 focus:outline-none focus:border-green-700 hover:border-green-700"
                  }
                />
              }
              buttonGroupClasses={"mt-2"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
