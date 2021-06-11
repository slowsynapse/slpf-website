import { Container } from 'postcss';
import React from 'react';


const GenericBlockContent = ({
    label,
    description,
    buttonGroup,
    containerBlockClasses,
    labelClasses,
    descriptionClasses,
    buttonGroupClasses
}) => {
    return(
        <div className="w-full">
            <div className={containerBlockClasses}>
                <h2 className={labelClasses}>{label}</h2>
                <p className={descriptionClasses}>
                    {description}
                </p>
                <div className={buttonGroupClasses}>
                    {
                        buttonGroup
                    }
                </div>
            </div>
        </div>
    );
}

export default GenericBlockContent;