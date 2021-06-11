import React, { useState } from "react";

const GenericBanner = ({ title, content, imageRule, bannerRule, tailwindRule="" }) => {
  return (
    <div className={tailwindRule}>
    <div class="bg-gradient-to-b from-groupBanner-primary to-groupBanner-secondary">
      <div className="w-full bg-gradient-to-l from-hero-primary via-hero-secondary to-transparent relative z-0">
       <div className={`flex flex-col justify-around container mx-auto pl-5 py-12 ${bannerRule}`}>
        <h1 className="font-bold text-white text-4xl w-144">
          {title}
        </h1>
          {content}
       </div>
       <img
            src={"/images/bitcoin-icon.svg"}
            className={`absolute z-10 ${imageRule}`}
          ></img>
      </div>
    </div>
    </div>
  );
};

export default GenericBanner;
