import React from 'react';
import Link from 'next/link';


const ButtonGroup = ({
    label,
    secondLabel,
    firstButtonClasses,
    secondButtonClasses,
    linkOne="",
    linkTwo=""
}) => {
    return(
        <div className="flex flex-col justify-center">
            <Link href={linkOne} passHref>
                <a className={`${firstButtonClasses} text-center`}>{label}&nbsp;&#10132;</a>
            </Link>
            <Link href={linkTwo} passHref>
                <a className={`${secondButtonClasses} text-center`}>{secondLabel}&nbsp;&#10132;</a>
            </Link>
        </div>
    );
}

export default ButtonGroup;