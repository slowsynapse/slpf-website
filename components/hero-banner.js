import Link from "next/link";
import GenericBanner from "../components/factory/GenericBanner";
import ButtonGroup from "./factory/ButtonGroup";

const HeroBanner = () => {
  return (
    <>
      <GenericBanner
        title={
          "A token economy backed by Proof of Work. We serve to promote and the Simple Ledger Protocol (SLP) on Bitcoin Cash."
        }
        content={<ButtonGroup
          label={"Learn  more  about  SLP  foundation"}
          linkOne={"/slp-foundation"}
          firstButtonClasses={
            "max-w-max uppercase font-bold text-white md:text-xl border-b-4 font-gilroyRegular"
          }
        />}
        imageRule={"w-168 -right-28 -top-28"}
        bannerRule={"h-110 pt-16"}
        tailwindRule={""}
      />
    </>
  );
}

export default HeroBanner;