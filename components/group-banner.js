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
      <div class="bg-gradient-to-b from-groupBanner-primary to-groupBanner-secondary">
        <div class="bg-gradient-to-l from-yellow-50 to-transparent ">
          <GenericBanner
            title={"A token economy backed by Proof of Work. We serve to promote and the Simple Ledger Protocol (SLP) on Bitcoin Cash."}
            content={<TonContent />}
            imageSize={"w-168"}
            bannerHeight={"h-110"}
          />
          <ProjectsAndPartners />
        </div>
      </div>
    </>
  );
}
