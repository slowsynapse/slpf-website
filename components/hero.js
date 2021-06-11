import Link from "next/link";

import styles from "./scss/hero.module.scss";

export default function Hero() {
  return (
    <div class="flex flex-col justify-items-center justify-center w-full bg-gradient-to-l from-hero-primary via-hero-secondary to-transparent">
      <div class="max-w-7xl">
        <h1 class="font-bold text-white text-3xl ">
          A token economy backed by Proof of Work. We serve to promote and the
          Simple Ledger Protocol (SLP) on Bitcoin Cash.
        </h1>
        <Link href="/about" passHref>
          <a title="Learn more about SLP foundation">
            <h2 class="max-w-max uppercase font-bold text-white text-xl border-b-4 font-gilroy">
              Learn more about SLP Foundation&nbsp;&#10132;
            </h2>
          </a>
        </Link>
        <img src="/images/bitcoin-icon.svg" class="h-48"></img>
      </div>
    </div>
  );
}
