import React, { useState } from "react";

const GenericBanner = ({
  title,
  content,
  imageRule,
  bannerRule,
  tailwindRule= "",
}) => {
  return (
    <div className={tailwindRule}>
      <div className="bg-gradient-to-b from-groupBanner-primary via-groupBanner-primary to-groupBanner-secondary">
        <div className="w-full bg-gradient-to-l from-hero-primary via-hero-secondary to-transparent relative z-0">
          <div
            className={`flex flex-col justify-around container sm:max-w-screen-xsm md:max-w-screen-md xl:max-w-screen-1440p mx-auto max-h-64 md:max-h-full xsm:py-4 md:py-12 ${bannerRule}`}
          >
            <h1 className="font-bold text-white md:text-4xl text-xl md:w-144 font-gilroyLight">
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
