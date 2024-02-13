import NoSSR from "@mpth/react-no-ssr";
import usePrevious from "@react-hook/previous";
import { Nunito_Sans as NunitoSans } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import ReactModernDrawer from "react-modern-drawer";
import styles from "./style.module.scss";

// eslint-disable-next-line new-cap
const nunitoSans = NunitoSans({ subsets: ["latin"], weight: "700" });

export type DrawerProps = {
  isOpen: boolean;
  offIsOpen: () => void;
  pathname: string;
};

export default function Drawer({
  isOpen,
  offIsOpen,
  pathname,
}: DrawerProps): JSX.Element {
  const prevPathname = usePrevious(pathname);

  useEffect(() => {
    if (pathname === prevPathname) {
      return;
    }

    offIsOpen();
  }, [offIsOpen, pathname, prevPathname]);

  return (
    <NoSSR>
      <ReactModernDrawer
        className={styles.drawer}
        direction="top"
        onClose={offIsOpen}
        open={isOpen}
      >
        <ul className={`${styles.list} ${nunitoSans.className}`}>
          <li>
            <Link
              className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
              href="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${pathname === "/contact" ? styles.active : ""}`}
              href="/contact"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${pathname === "/recruit" ? styles.active : ""}`}
              href="/recruit"
            >
              RECRUIT
            </Link>
          </li>
        </ul>
      </ReactModernDrawer>
    </NoSSR>
  );
}
