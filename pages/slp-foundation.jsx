import React from 'react';
import GenericPage from '../components/factory/GenericPage';
import GenericBlockContent from '../components/factory/GenericBlockContent';
import ButtonGroup from '../components/factory/ButtonGroup';
import styles from '../components/scss/tokens.module.scss';

export const SlpFoundationContent = () => {
    return(
        <>
        <p>Je suis un contenu</p>
        </>
    )
}


const SlpFoundation = () => {
      return(
        <GenericPage
        genericPageContainerBreadcrumbClasses={"flex items-center container mx-auto"}
        gridContainerContentClasses={""}
        destination={"SLP Foundation"}
        linkBreadCrumb={"/"}
        childContentPage={<SlpFoundationContent/>}
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

export default SlpFoundation;