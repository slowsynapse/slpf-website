import React from 'react';
import GenericPage from '../components/factory/GenericPage';
import GenericBlockContent from '../components/factory/GenericBlockContent';
import ButtonGroup from '../components/factory/ButtonGroup';
import styles from '../components/scss/tokens.module.scss';
import Content from '../components/factory/Content';
import Link from 'next/link';


const WalletContent = () => {
    return(
        <p>
            <Link href="" passHref><a title="Link to Electron Cash SLP Edition page" className="underline text-page-primary">Electron Cash SLP Edition</a></Link>, First you will want to download Electron Cash SLP
            Edition (opens new window)this is the reference wallet and very good for
            learning and developing as it has every SLP feature built into it.
        </p>
    )
}

const ExchangeContent = () => {
    return(
        <p>
            <Link href="" passHref><a title="Link to X page" className="underline text-page-primary">X</a></Link>, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
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
        <div className="grid grid-cols-2">
            <GenericBlockContent
                containerBlockClasses={`flex-col  p-28 justify-center`}
                label={labelTitle[0]}
                labelClasses={"bg-green-100 font-bold text-4xl w-max mb-5"}
                tailwindRule={` ${revert ? 'bg-gray-200' : 'bg-gray-300'}`}
                buttonGroup={
                <ButtonGroup
                    label={'LEARN MORE'}
                    isShareIcon={true}
                    linkOne={link[0]}
                    firstButtonClasses={'font-bold py-2 border-b-8 border-green-500 w-max'}
                />
                }
                buttonGroupClasses={"mt-2"}
            />
            <GenericBlockContent
                containerBlockClasses={`flex-col p-28 justify-center`}
                label={labelTitle[1]}
                labelClasses={"bg-green-100 font-bold w-max text-4xl mb-5"}
                tailwindRule={`${revert ? "bg-gray-300" : "bg-gray-200"}`}
                buttonGroup={
                <ButtonGroup
                    label={'LEARN MORE'}
                    isShareIcon={true}
                    linkOne={link[1]}
                    firstButtonClasses={'font-bold py-2 border-b-8 border-green-500 w-max'}
                />
                }
                buttonGroupClasses={"mt-2"}
            />
        </div>
    )
}

const ResourcesLinksContent = () => {
    let contentList = [
        [["Get Started", "Terminology"], "/",true],
        [["Specification", "Guides"],"/", false],
        [["Packages", "Tooling"], "/",true]
    ]

    let containerBlockList = [];
    for(let i = 0; i < 3; ++i) {
        containerBlockList.push(
            <BlockContent
            labelTitle={contentList[i][0]}
            link={contentList[i][1]}
            revert={contentList[i][2]}
            />
        )
    }

    return(
        <div className="w-4/5 text-lg">
            <div className="mt-5">
                {containerBlockList}
                <div className="my-10">
                    <ButtonGroup
                        isShareIcon={true}
                        label={'GO TO SLP.DEV WEBSITE'}
                        linkOne={"/"}
                        firstButtonClasses={'font-bold py-2 border-b-8 border-green-500 w-max'}
                    />
                </div>
            </div>
            <div className="mt-10">
                <h1 className=" my-5 text-4xl font-bold">Leadership team</h1>
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
            {label: "About SLP", href:'/'},
            {label: "SLP Tokens", href:'/'}, 
            {label: "Project & Tokens", href:'/'}, 
            {label: "Resources", href:'/'},
            {label: "Get Started", href:'/'}
        ]}
        isLink={true}
        tailwindRule="pl-10"
        genericBlockContentWithData={
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
        }
        activateSideBar={true}
        />
    );
}


export default ResourcesLinks;