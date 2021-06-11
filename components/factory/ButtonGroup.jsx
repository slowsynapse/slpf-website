import React from 'react';



const ButtonGroup = ({
    label,
    secondLabel,
    firstButtonClasses,
    secondButtonClasses
}) => {
    return(
        <div className="flex flex-col">
            <button className={firstButtonClasses}>{label}&nbsp;&#10132;</button>
            <button className={secondButtonClasses}>{secondLabel}&nbsp;&#10132;</button>
        </div>
    );
}

export default ButtonGroup;