import React, { useState } from "react";

const GenericBanner = ({
  title,
  content,
  imageRule,
  bannerRule,
  tailwindRule= "",
  titleClasses = ""
}) => {
  return (
    <div className={tailwindRule}>
      <div className="bg-gradient-to-b from-groupBanner-primary via-groupBanner-primary to-groupBanner-secondary">
        <div className="w-full bg-gradient-to-l from-hero-primary via-hero-secondary to-transparent relative z-0">
          <div
            className={`flex flex-col justify-around container max-w-screen-1440p mx-auto max-h-64 md:max-h-full xsm:py-4 md:py-12 px-5 ${bannerRule}`}
          >
            <h1 className={`font-black text-white text-2xl md:text-4xl md:w-144 font-gilroyLight ${titleClasses}`}>
              {title}
            </h1>
            {content}
          </div>
          <img
            src={"/images/bitcoin-icon.svg"}
            className={`md:absolute z-10 ${imageRule} hidden md:block`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default GenericBanner;
