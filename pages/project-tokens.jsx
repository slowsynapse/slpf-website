import React from 'react';
import GenericPage from '../components/factory/GenericPage';
import GenericBlockContent from '../components/factory/GenericBlockContent';
import ButtonGroup from '../components/factory/ButtonGroup';
import styles from '../components/scss/tokens.module.scss';
import Content from '../components/factory/Content';
import Link from 'next/link';

const PaytaccaContent = () => {
    return(
        <p className="font-gilroyMedium pl-8 border-l-4 border-gray-300">
            “We are a firm believer in decentralization of finance as the best way forward.
            Hence, we would like to advance the use of cryptocurrency as peer-to-peer
            electronic cash, which is what Bitcoin Cash stands for. Now with SLP and smart
            contracts, we have the means to innovate on top of Bitcoin Cash to solve real
            world pain points in finance." - Dr. Joemar Taganna, CEO of Paytaca
        </p>
    )
}


const OrbContent = () => {
    return(
        <p className="font-gilroyMedium">
            “We’re excited to be the first to bring polished NFT use-case for games on
            Bitcoin Cash” - Joey B. Wong
        </p>
    )
}


const FlexContent = () => {
    return(
        <p className="font-gilroyMedium">
            <Link href="https://coinflex.com/fr/support/6-1-6-what-kind-of-token-is-flex-coin/" passHref><a target="_blank" title="Link to MintBot page" className="underline text-page-primary">Flex</a></Link> is an SLP token for gaining rewards that reduce their trading fees on the  &nbsp;
            <Link href="https://coinflex.com/fr/" passHref><a target="_blank" title="Link to MintBot page" className="underline text-page-primary">CoinFlex Exchange</a></Link>.
        </p>
    );
}


const MintContent = () => {
    return(
        <p className="font-gilroyMedium">
            <Link href="https://mintslp.com/" passHref><a target="_blank" title="Link to MintBot page" className="underline text-page-primary">MintBot</a></Link> is a tipping application that can be easily added to Telegram with no
            coding required. The Mint token allows users in a chat room to tip one another
            for their contributions.
        </p>
    )
}


const SpiceContent = () => {
    return(
        <>
            <p className="mb-5 font-gilroyMedium">
                <Link href="https://spicetoken.org/" passHref><a target="_blank" title="Link to Spice token page" className="underline text-page-primary">Spice Token</a></Link> is an appreciation token for the Bitcoin Cash blockchain, and
                serves as part of a generalized Social Tipping Platform. Spice works with
                services such as SpiceFeed which captures all tipped content and aggregates
                it into an overview of the hottest content happening across multiple social
                networks.
            </p>
            <p className="pl-8 border-l-4 border-gray-300 font-gilroyMedium">
                “SPICE is the first SLP token that gained widespread use mainly through its
                tipping bot. The simplicity and efficiency of SLP helped to get us to that
                point quickly and it continues to power many new token projects (some
                inspired by SPICE) with different use cases. I guess it’s fair to say we seeded
                the ‘tokenbrian' explosion in SLP.” - SPICE Dev Team
            </p>
        </>
    )
}


const StablecoinContent = () => {
    return(
        <>
            <p className="font-gilroyMedium"> 
                <Link href="https://tether.to/" passHref><a target="_blank" title="Link to Thether page" className="underline text-page-primary">Thether (USDT)</a></Link> is the first and best-know stablecoin on the market. The Tether
                team chose BCH for its stability, security, and low transaction fees.
            </p>
        </>
    )
}


const ProjectTokensContent = () => {

    return(
        <div className="w-4/5 text-lg">
            <span className="
            text-4xl bg-page-secondary font-gilroyLight mb-3">
                SLP is used for some of the most well-known
                and used projects on the Blockchain. Why do
                so many projects choose SLP? Read for yourself
                what the developers have to say about
                working with SLP.
            </span>
            <div className="flex mb-5 mt-5">
                <div className="grid grid-cols-6 ">
                    <div className="bg-gray-200 xl:w-36 xl:h-36 md:w-24 md:h-24 p-5 my-3 mr-3">
                    </div>
                    <div className="bg-gray-200 xl:w-36 xl:h-36 md:w-24 md:h-24 p-5 my-3 mr-3">
                    </div>
                    <div className="bg-gray-200 xl:w-36 xl:h-36 md:w-24 md:h-24 p-5 my-3 mr-3">
                    </div>
                    <div className="bg-gray-200 xl:w-36 xl:h-36 md:w-24 md:h-24 p-5 my-3 mr-3">
                    </div>
                    <div className="bg-gray-200 xl:w-36 xl:h-36 md:w-24 md:h-24 p-5 my-3 mr-3">
                    </div>
                    <div className="bg-gray-200 xl:w-36 xl:h-36 md:w-24 md:h-24 p-5 my-3 mr-3">
                    </div>
                </div>
            </div>
            <div className="">
                <Content
                title={"USDT (Stablecoin)"}
                content={<StablecoinContent/>}
                />
                <Content
                title={"SPICE (Social Media)"}
                content={<SpiceContent/>}
                />
                <Content
                title={"Mint (Tipping)"}
                content={<MintContent/>}
                />
                <Content
                title={"Flex"}
                content={<FlexContent/>}
                />
                <Content
                title={"ORB (Gaming)"}
                content={<OrbContent/>}
                />
                <Content
                title={"Paytacca (Payment Solution)"}
                content={<PaytaccaContent/>}
                />
            </div>
        </div>
    )
}


const ProjectTokens = () => {
    return(
        <GenericPage
        titleBanner="Project & Tokens"
        genericPageContainerBreadcrumbClasses={"flex items-center container mx-auto"}
        gridContainerContentClasses={""}
        destination={"Projects & Tokens"}
        linkBreadCrumb={"/"}
        childContentPage={<ProjectTokensContent/>}
        contentListSideBar={[
            {label: "About SLP", href:'/slp-foundation'},
            {label: "SLP Tokens", href:'/slp-tokens'}, 
            {label: "Project & Tokens", href:'/project-tokens'}, 
            {label: "Resources", href:'/resources-links'},
            {label: "Get Started", href:'/'}
        ]}
        isLink={true}
        tailwindRule="pl-10"
        genericBlockContentWithData={
            <GenericBlockContent
            containerBlockClasses={`flex-col xl:w-2/5 lg:w-3/5 w-full ${styles.rootSecond}`}
            label={"Get in touch"}
            labelClasses={"bg-white font-bold text-4xl xl:w-3/5 md:w-4/5 mb-5 font-gilroyBold"}
            description={"SLP Foundation is a non-profit organisation open to all. We are commited to having a transparent\
            framework and community so that various stakeholders can see their voices turn into action\
            "}
            descriptionClasses={"mb-3 font-gilroyLight"}
            buttonGroup={
              <ButtonGroup
                label={'TELEGRAM'}
                secondLabel={'EMAIL'}
                linkOne={"https://t.me/simpleledger"}
                linkTwo={"mailto:support@slpfoundation.org"}
                firstButtonClasses={'font-bold py-2 bg-page-primary focus:outline-none focus:bg-green-700 hover:bg-green-700'}
                secondButtonClasses={'font-bold border-4 bg-white border-page-primary py-2 mt-3 focus:outline-none focus:border-green-700 hover:border-green-700'}
              />
            }
            buttonGroupClasses={"mt-2"}
          />
        }
        activateSideBar={true}
        />
    );
}

export default ProjectTokens;