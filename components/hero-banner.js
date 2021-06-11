import Link from "next/link";
import Hero from "./hero";
import ProjectsAndPartners from "./projects-and-partners";
import GenericBanner from "../components/factory/GenericBanner";

export const TonContent = () => {
  return (
    <Link href="/about" passHref>
      <a title="Learn more about SLP foundation">
        <h2 class="max-w-max uppercase font-bold text-white text-xl border-b-4 font-gilroy">
          Learn more about SLP Foundation&nbsp;&#10132;
        </h2>
      </a>
    </Link>
  );
};

export default function GroupBanner() {
  return (
    <>
      <GenericBanner
        title={
          "A token economy backed by Proof of Work. We serve to promote and the Simple Ledger Protocol (SLP) on Bitcoin Cash."
        }
        content={<TonContent />}
        imageRule={"w-168 -right-28 -top-28"}
        bannerRule={"h-110 pt-16"}
      />
    </>
  );
}
