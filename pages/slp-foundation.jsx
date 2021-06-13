import React from 'react';
import GenericPage from '../components/factory/GenericPage';
import GenericBlockContent from '../components/factory/GenericBlockContent';
import ButtonGroup from '../components/factory/ButtonGroup';
import styles from '../components/scss/tokens.module.scss';
import GenericList from '../components/factory/GenericList';
import Content from '../components/factory/Content';
import Link from 'next/link';

const LeadDeveloperLSContent = () => {
  return(
    <p className="mb-5">
    <Link href="" passHref><a title="Link to Jt Blockparty Freeman page" className="underline text-page-primary">Jt "Blockparty" Freeman</a></Link>
    , Lead Director. JT is the co-founder of
    fountainhead.cash developer services, SLP Foundation lead developer, and
    organizer of the SLP Virtual Hackathon.
  </p>
  )
}

const LeaderShipTeamContent = () => {
  return(
    <>
      <p className="mb-5">
        <Link href="" passHref><a title="Link to Joey B. Wong page" className="underline text-page-primary">Joey B. Wong</a></Link>, Director. Joey is an entrepreneur and the co-founder of Spice
        Token, one of the most successful SLP projects. He has been in Bitcoin Cash
        since the beginning, and built businesses that focused on delivering health
        products. Before that he had a long career in film and television where he
        worked with reputable corporations such as the National Geographic Channel
      </p>
      <p className="mb-5">
      <Link href="" passHref><a title="Link to Peter Ng page" className="underline text-page-primary">Peter Ng.</a></Link> Director. Peter has been active in the crypto space for 8 years, crypto
      veteran, is the founder of Blitz Network, a proprietary trading firm with a focus
      on OTC client servicing. He is also the founder of JD Mining, the first
      industrialised mining operation in the world that currently manages 300MW of
      hosting facilities, enough to power a quarter million mining rigs.
      </p>
      <p className="mb-5">
        <Link href=""><a title="Link to Stefan Rust" className="underline text-page-primary">Stefan Rust</a></Link>, Director. Stefan is the former CEO of Bitcoin.com and founder of
        Sonic Ventures, an investment fund for social change. Stefan has more than 20
        years of experience as an investor, executive and senior manager. He serves as
        strategic adviser to Hypha Ltd., Cyclebit and Union Marketplace.
      </p>
    </>
  )
}

export const SlpFoundationContent = () => {
    const contentListSideBar=[
      {label: "Fundraising support for open source that contribute to the ecosystem."},
      {label: "Hackathon sponsorship, prizes, and education for developers on SLP."},
      {label: "Community support in the form of educational materials, online resources,\
      and social platforms for the community meet and create mutual support\
      and develop joint projects."},
      {label: "Support for node operators, wallets and exchanges on SLP integration"},
      {label: "Research and Development efforts such as the Post Office Protocol that will\
      allow SLP transactions fees to be paid in SLP rather than BCH."},
      {label: "Working and funding developers that work on key infrastructure on the SLP protocol."}
    ]
    return(
      <div className="w-4/5 text-lg">
        <p>
          Created and funded by BCH stakeholders in late 2019. The SLP Foundation’s
          core mission is to expound the high viability of using BCH as a token platform,
          specifically the Simple Ledger Protocol. The foundation is currently focused on
          bolstering the enhancement, promotion, infrastructure, research and promotion
          of the SLP protocol by working with devs and other talent to scale the thriving
          SLP community to the fullest extent possible
        </p>
        <div className="mt-10">
          <p>
            SLP activities include:
          </p>
          <GenericList contentListSideBar={contentListSideBar} isLink={false}/>
        </div>
        <div className="mt-10">
          <h1 className=" my-5 text-4xl font-bold">Leadership team</h1>
            <Content
              title={"DIRECTORS"}
              content={<LeaderShipTeamContent/>}
            />
            <Content
              title={"LEAD DEVELOPER"}
              content={<LeadDeveloperLSContent/>}
            />
        </div>
      </div>
    )
}


const SlpFoundation = () => {
      return(
        <GenericPage
        titleBanner="SLP Foundation"
        genericPageContainerBreadcrumbClasses={"flex items-center container mx-auto"}
        gridContainerContentClasses={""}
        destination={"SLP Foundation"}
        linkBreadCrumb={"/"}
        childContentPage={<SlpFoundationContent/>}
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
            label={"Get in touch"}
            labelClasses={"bg-white font-bold text-4xl w-3/5 mb-5"}
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
      )
}

export default SlpFoundation;