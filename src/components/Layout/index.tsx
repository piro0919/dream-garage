"use client";
import NoSSR from "@mpth/react-no-ssr";
import usePrevious from "@react-hook/previous";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { ReactNode, useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { useBoolean } from "usehooks-ts";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./style.module.scss";

export type LayoutProps = {
  children: ReactNode;
  pathname: string;
};

export default function Layout({
  children,
  pathname: serverPathname,
}: LayoutProps): JSX.Element {
  const [pathname, setPathname] = useState(serverPathname);
  const prevPathname = usePrevious(pathname);
  const clientPathname = usePathname();
  const {
    setFalse: offIsOpen,
    setTrue: onIsOpen,
    value: isOpen,
  } = useBoolean(false);

  useEffect(() => {
    setPathname(clientPathname);
  }, [clientPathname]);

  useEffect(() => {
    if (pathname === prevPathname) {
      return;
    }

    offIsOpen();
  }, [offIsOpen, pathname, prevPathname]);

  return (
    <>
      {pathname === "/" ? (
        children
      ) : (
        <div className={styles.wrapper}>
          <Header onIsOpen={onIsOpen} />
          <main>{children}</main>
          <Footer />
        </div>
      )}
      <NextTopLoader color="#d96811" height={2} />
      <NoSSR>
        <Drawer
          className={styles.drawer}
          direction="top"
          onClose={offIsOpen}
          open={isOpen}
        >
          <ul className={styles.list}>
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
        </Drawer>
      </NoSSR>
    </>
  );
}
