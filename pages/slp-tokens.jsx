import React from 'react';
import GenericPage from '../components/factory/GenericPage';
import GenericBlockContent from '../components/factory/GenericBlockContent';
import styles from '../components/scss/tokens.module.scss';
import ButtonGroup from '../components/factory/ButtonGroup';
import GenericList from '../components/factory/GenericList';


export const SlpTokenContent = () => {
    const contentListSideBar=[
        {label: "Voting and polling."},
        {label: "Access control and ticketing."},
        {label: "Fungible tokens and cryptocurrencies."},
        {label: "Non-fungible tokens (NFT)s for games and collectibles"},
        {label: "Branded community point systems."},
        {label: "Rewards distribution."},
        {label: "Asset tokenization."}
      ]
    return(
        <div className="w-4/5 text-lg">
            <p className="mb-5">
                Built on Bitcoin Cash, one of the most secure cryptocurrency networks in the
                world. SLP lets anyone create a token in minutes with no programming. Startups
                and technology projects can benefit greatly from the addition of tokens that
                gives the project incentives in the form of tokenomics, driving traction.
            </p>
            <p>
                Low fees, instant transactions due to the scalability of Bitcoin Cash makes SLP
                a great choice for projects that need volume, but don’t want users be paying
                high fees
            </p>
            <div className="mt-10 mb-10">
            <GenericList contentListSideBar={contentListSideBar} isLink={false}/>
            </div>
            <p className="mb-10">
                SLP is one of the easiest protocols to work with, and it’s our commitment to
                continue to develop the tools to make BCH the leading blockchain for
                lightweight, plug and play tokens that also deliver advanced functionality.
            </p>
            <div className="w-3/6 mb-10">
                <ButtonGroup
                    label={'GET STARTED'}
                    linkOne="/"
                    linkeTwo="/"
                    secondLabel={'DEVELOPER RESOURCES'}
                    firstButtonClasses={'font-bold py-2 bg-green-600 focus:outline-none focus:bg-green-700 hover:bg-green-700'}
                    secondButtonClasses={'font-bold border-2 bg-white border-green-600 py-2 mt-3 focus:outline-none focus:border-green-700 hover:border-green-700'}
                />
            </div>
        </div>
    )
}

const SlpToken = () => {
    return(
        <GenericPage
        titleBanner="SLP Tokens"
        genericPageContainerBreadcrumbClasses={"flex items-center container mx-auto"}
        gridContainerContentClasses={""}
        destination={"SLP Tokens"}
        linkBreadCrumb={"/"}
        childContentPage={<SlpTokenContent/>}
        contentListSideBar={[
          {label: "About SLP", href:'/'},
          {label: "SLP Tokens", href:'/'}, 
          {label: "Project & Tokens", href:'/'}, 
          {label: "Resources", href:'/'},
          {label: "Get Started", href:'/'}
        ]}
        isLink={true}
        genericBlockContentWithData={
          <GenericBlockContent
            containerBlockClasses={`flex-col w-2/5 ${styles.rootSecond}`}
            label={"Get in touch"}
            labelClasses={"bg-white font-bold text-4xl w-3/5 mb-5"}
            description={"SLP Foundation is a non-profit organisation open to all. We are commited to having a transparent\
            framework and community so that various stakeholders can see their voices turn into action\
            "}
            descriptionClasses={"mb-3"}
            buttonGroup={
              <ButtonGroup
                linkOne="/"
                linkTwo="/"
                label={'TELEGRAM'}
                secondLabel={'EMAIL'}
                firstButtonClasses={'font-bold py-2 bg-green-600 focus:outline-none focus:bg-green-700 hover:bg-green-700'}
                secondButtonClasses={'font-bold border-2 bg-white border-green-600 py-2 mt-3 focus:outline-none focus:border-green-700 hover:border-green-700'}
              />
            }
            buttonGroupClasses={"mt-2"}
          />
        }
        activateSideBar={true}
        />
    )
}

export default SlpToken;