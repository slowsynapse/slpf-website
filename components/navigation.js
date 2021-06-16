import { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

import styles from "./scss/navigation.module.scss";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleMenu = useCallback(() => {
    if (!open) {
      setVisible(true);
      setTimeout(() => setOpen(true), 1);
    } else {
      setOpen(false);
      setTimeout(() => setVisible(false), 200);
    }
  });

  useEffect(() => {
    if (typeof document === "undefined") return;

    const html = document.getElementsByTagName("html")[0];
    if (!html) return;

    html.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="md:relative z-20 bg-white w-full">
      <nav className={`container z-20 max-w-screen-1440p mx-auto -pl-4 ${styles.root}`}>
        <Link href="/" passHref>
          <a title="SLP Foundation">
            <img src="/images/logo-sample.png" className={styles.logo} />
          </a>
        </Link>
        <img
          src="/images/hamburger.png"
          className={styles.hamburger}
          onClick={toggleMenu}
        />
        <ul
          className={clsx(
            styles.links,
            open && styles.linksOpen,
            visible && styles.linksVisible
          )}
        >
          <li>
            <Link href="/slp-foundation" passHref>
              <a title="SLP Foundation">
                SLP Foundation<span className={styles.arrow}>&gt;</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/slp-tokens" passHref>
              <a title="SLP Tokens" className="uppercase">
                SLP Tokens<span className={styles.arrow}>&gt;</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/project-tokens" passHref>
              <a title="Project and Tokens">
                Projects & tokens<span className={styles.arrow}>&gt;</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/resources-links" passHref>
              <a title="Resources">
                Resources<span className={styles.arrow}>&gt;</span>
              </a>
            </Link>
          </li>
          <li className={styles.button}>
            <a href="/" title="Get started">
              Get started<span className={styles.arrow}>&gt;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
