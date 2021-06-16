import React from 'react';

const GenericBlockContent = ({
    label,
    description,
    buttonGroup,
    labelClasses,
    descriptionClasses,
    buttonGroupClasses,
    containerBlockClasses,
    tailwindRule="",
}) => {
    return(
        <div className={tailwindRule}>
            <div className={containerBlockClasses}>
                <h2 className={labelClasses}>{label}</h2>
                <span className={`${descriptionClasses} my-6`}>
                    {description}
                </span>
                <div className={buttonGroupClasses}>
                    {buttonGroup}
                </div>
            </div>
        </div>
    );
}

export default GenericBlockContent;