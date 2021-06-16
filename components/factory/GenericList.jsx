import React from 'react';
import Link from 'next/link';

const GenericList = ({contentListSideBar, isLink, tailwindRule="", contentListClasses="py-3 ml-4"}) => {
    return(
        <ul className={`z-10 pl-8  ${tailwindRule}`}>
            {
                contentListSideBar && contentListSideBar.map((content, index) => {
                    return (
                        <li  key={Math.random() * index} className="flex items-center font-gilroyMedium">
                            <div>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" width="14px" height="14px" fill="#61bb71" viewBox="0 0 341.333 341.333" xmlSpace="preserve">
                                    <g>
                                        <g>
                                            <path
                                                d="M170.667,0C76.41,0,0,76.41,0,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667S264.923,0,170.667,0z
                                            M170.667,298.667c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S241.359,298.667,170.667,298.667z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            {
                                isLink ? (
                                    <span className="py-2 w-max">
                                        <Link href={content.href} passHref>
                                            <a title="Redirection land page" className="ml-4 font-gilroyMedium text-xl">
                                                {content.label}
                                            </a>
                                        </Link>
                                    </span>
                                ) : (
                                    <span className={contentListClasses}>
                                        {content.label}
                                    </span>
                                )
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default GenericList;