import React from 'react';
import Navigation from '../navigation';
import Link from 'next/link';
import GenericList from './GenericList';
import GenericBanner from './GenericBanner';
import Footer from '../../components/footer';
import Head from "../../components/head";

const GenericPage = ({
    titleBanner,
    genericPageContainerBreadcrumbClasses,
    gridContainerContentClasses,
    linkBreadCrumb,
    destination,
    contentListSideBar,
    childContentPage,
    genericBlockContentWithData,
    activateSideBar,
    isLink,
    tailwindRule=""
}) => {
    return(
        <div className="z-20 overflow-x-hidden">
            <Head>
                <title>{titleBanner}</title>
            </Head>
            <Navigation/>
            <div className="mb-10">
                <GenericBanner
                    title={titleBanner}
                    imageRule={"w-96 right-48 -bottom-48"}
                    bannerRule={"h-32"}
                />
                <div className={`${genericPageContainerBreadcrumbClasses} flex z-20 pl-5 mt-16`}>
                    <Link href={linkBreadCrumb} passHref>
                        <a title="Redirection land page" className="tracking-wide text-lg mr-2 text-gray-400 font-gilroyLight">
                            Home
                        </a>
                    </Link>
                    <svg version="1.1" fill="#61BB71" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" width="24px" height="24px" viewBox="0 0 256 256" xmlSpace="preserve">
                        <g>
                            <g>
                                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128"/>
                            </g>
                        </g>
                    </svg>
                    <h2 className="tracking-wide text-lg ml-2 text-gray-400 font-gilroyLight">{destination}</h2>
                </div>
                <div className={`grid xl:grid-cols-6 md:grid-cols-8 ${gridContainerContentClasses} container mx-auto pl-5 mt-8`}>
                    <div className={`col-start-1 xl:col-span-5 md:col-span-6 z-10 ${activateSideBar ? "border-r border-page-primary" : ''}`}>
                        {childContentPage}
                        <div className="block">
                            {genericBlockContentWithData}
                        </div>
                    </div>
                    <div className="hidden md:flex xl:flex justify-end md:col-start-8 xl:col-end-6">
                        <GenericList contentListSideBar={contentListSideBar} isLink={isLink}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default GenericPage;