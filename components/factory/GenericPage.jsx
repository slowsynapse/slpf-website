import React from 'react';
import Navigation from '../navigation';
import Link from 'next/link';
import GenericList from './GenericList';
import GenericBanner from './GenericBanner';

const GenericPage = ({
    genericPageContainerBreadcrumbClasses,
    gridContainerContentClasses,
    linkBreadCrumb,
    destination,
    childContentPage,
    genericBlockContentWithData,
    activateSideBar
}) => {
    return(
        <div className="">
            <Navigation/>
            <div className="">
                <GenericBanner
                    title={"SLP FOUNDATION"}
                    imageSize={"w-20"}
                    bannerHeight={"h-32"}
                />
                <div className={`${genericPageContainerBreadcrumbClasses} pl-5 mt-16`}>
                    <Link href={linkBreadCrumb} passHref>
                        <a title="Redirection land page" className="tracking-wide text-lg mr-2 text-gray-400 font-medium">
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
                    <h2 className="tracking-wide text-lg ml-2 text-gray-400 font-medium">{destination}</h2>
                </div>
                <div className={`grid grid-cols-6 ${gridContainerContentClasses} container mx-auto pl-5 mt-8`}>
                    <div className={`col-start-1 col-span-5 ${activateSideBar ? "border-r-2 border-green-600" : ''}`}>
                        {childContentPage}
                        {genericBlockContentWithData}
                    </div>
                    <div className="flex justify-end">
                        <GenericList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenericPage;