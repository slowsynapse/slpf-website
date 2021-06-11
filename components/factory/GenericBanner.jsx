import React, {useState} from "react";

const GenericBanner = ({  
    title,
    content,
    imageSize,
    bannerHeight
}) =>{
  return (
    <div className= {`flex flex-col justify-items-center justify-evenly w-full mx auto bg-gradient-to-l from-hero-primary via-hero-secondary to-transparent ${bannerHeight}`}>
        <h1 className="font-bold text-white text-3xl w-144">
          {title}
        </h1>
        {content}
        <img src={"/images/bitcoin-icon.svg"} className={`absolute -right-28 ${imageSize}`}></img>
    </div>
  )
}

export default GenericBanner;