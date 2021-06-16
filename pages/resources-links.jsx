import React from 'react';
import GenericPage from '../components/factory/GenericPage';
import GenericBlockContent from '../components/factory/GenericBlockContent';
import ButtonGroup from '../components/factory/ButtonGroup';
import styles from '../components/scss/tokens.module.scss';
import Content from '../components/factory/Content';
import Link from 'next/link';


const WalletContent = () => {
    return(
        <p className="font-gilroyMedium">
            <Link href="https://electroncash.org/" passHref><a target="_blank" title="Link to Electron Cash SLP Edition page" className="underline text-page-primary font-gilroyMedium">Electron Cash SLP Edition</a></Link>, First you will want to download Electron Cash SLP
            Edition (opens new window)this is the reference wallet and very good for
            learning and developing as it has every SLP feature built into it.
        </p>
    )
}

const ExchangeContent = () => {
    return(
        <p className="font-gilroyMedium">
            <Link href="#" passHref><a title="Link to X page" className="underline text-page-primary font-gilroyMedium">X</a></Link>, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
        </p>
    )
}

const BlockContent = ({
    labelTitle,
    link,
    revert
}) => {
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <GenericBlockContent
                containerBlockClasses={`flex-col xl:p-28 md:p-24 justify-center`}
                label={labelTitle[0]}
                labelClasses={"bg-page-secondary font-bold text-4xl w-max md:mb-5 xl:mb-5 ml-5 md:ml-0 xl:ml-0 my-10 md:my-0 xl:my-0 font-gilroyBold"}
                tailwindRule={` ${revert ? 'xl:bg-gray-200 md:bg-gray-200' : 'md:bg-gray-300 xl:bg-gray-300'} bg-gray-200`}
                buttonGroup={
                <ButtonGroup
                    label={'LEARN MORE'}
                    isShareIcon={true}
                    isExternalLink={false}
                    linkOne={link}
                    firstButtonClasses={'font-gilroyBold font-bold py-2 border-b-8 border-page-primary w-max ml-5 mb-5 md:ml-0 xl:ml-0 md:mb-0 xl:mb-0'}
                />
                }
                buttonGroupClasses={"mt-2"}
            />
            <GenericBlockContent
                containerBlockClasses={`flex-col xl:p-28 md:p-24 justify-center`}
                label={labelTitle[1]}
                labelClasses={"font-gilroyBold bg-page-secondary font-bold w-max text-4xl mb-5 md:mb-5 xl:mb-5 ml-5 md:ml-0 xl:ml-0 my-10 md:my-0 xl:my-0"}
                tailwindRule={`${revert ? "xl:bg-gray-300 md:bg-gray-300" : "md:bg-gray-200 xl:bg-gray-200"} bg-gray-300`}
                buttonGroup={
                <ButtonGroup
                    label={'LEARN MORE'}
                    isShareIcon={true}
                    isExternalLink={false}
                    linkOne={link}
                    firstButtonClasses={'font-gilroyBold font-bold py-2 border-b-8 border-page-primary w-max ml-5 mb-5 md:ml-0 xl:ml-0 md:mb-0 xl:mb-0'}
                />
                }
                buttonGroupClasses={"mt-2"}
            />
        </div>
    )
}

const ResourcesLinksContent = () => {
    let contentList = [
        [["Get Started", "Terminology"], "#",true],
        [["Specification", "Guides"],"#", false],
        [["Packages", "Tooling"], "#",true]
    ]

    let containerBlockList = [];
    for(let i = 0; i < 3; ++i) {
        containerBlockList.push(
            <BlockContent
            key={Math.random()}
            labelTitle={contentList[i][0]}
            link={contentList[i][1]}
            revert={contentList[i][2]}
            />
        )
    }

    return(
        <div className="xl:w-4/5 md:w-11/12 text-lg">
            <div className="mt-5">
                {containerBlockList}
                <div className="my-10">
                    <ButtonGroup
                        isExternalLink={false}
                        isShareIcon={true}
                        label={'GO TO SLP.DEV WEBSITE'}
                        linkOne={"#"}
                        firstButtonClasses={'font-gilroyBold font-bold py-2 border-b-8 border-page-primary w-max'}
                    />
                </div>
            </div>
            <div className="mt-10">
                <h1 className="font-gilroyBold my-5 text-4xl">Leadership team</h1>
                <Content
                title={"WALLETS"}
                content={<WalletContent/>}
                />
                <Content
                title={"EXCHANGES"}
                content={<ExchangeContent/>}
                />
            </div>
        </div>
    )
}


const ResourcesLinks = () => {
    return(
        <GenericPage
        titleBanner="Resources & Links"
        genericPageContainerBreadcrumbClasses={"flex items-center container mx-auto"}
        gridContainerContentClasses={""}
        destination={"Resources"}
        linkBreadCrumb={"/"}
        childContentPage={<ResourcesLinksContent/>}
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
            label={"Get involved"}
            labelClasses={"font-gilroyMedium bg-white font-bold text-green-350 text-4xl xl:w-3/5 md:w-4/5 mb-5"}
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
                firstButtonClasses={'font-gilroyMedium font-bold py-2 bg-page-primary focus:outline-none focus:bg-green-700 hover:bg-green-700'}
                secondButtonClasses={'font-gilroyMedium font-bold border-4 bg-white border-page-primary py-2 mt-3 focus:outline-none focus:border-green-700 hover:border-green-700'}
              />
            }
            buttonGroupClasses={"mt-2"}
          />
        }
        activateSideBar={true}
        />
    );
}


export default ResourcesLinks;