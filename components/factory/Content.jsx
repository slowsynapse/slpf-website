import React from 'react';


const Content = ({
    title,
    content,
    contentClasses,
    tailwindRule="",
    description
}) => {
    return(
        <div className=" mb-16">
            <div>
                <h2 className="font-bold mb-9 w-max border-b-8 pb-1 font-gilroyBold border-page-primary">
                    {title}
                </h2>
            </div>
            <div className="">
                {content}
            </div>
        </div>
    )
}


export default Content;