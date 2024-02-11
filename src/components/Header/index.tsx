"use clietn";
import { Norican, Nunito_Sans as NunitoSans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";
import HamburgerMenu from "react-hamburger-menu";
import styles from "./style.module.scss";

// eslint-disable-next-line new-cap
const norican = Norican({ subsets: ["latin"], weight: "400" });
// eslint-disable-next-line new-cap
const nunitoSans = NunitoSans({ subsets: ["latin"], weight: "700" });

export type HeaderProps = {
  onIsOpen: MouseEventHandler<HTMLButtonElement>;
};

export default function Header({ onIsOpen }: HeaderProps): JSX.Element {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/">
          <h1 className={`${styles.h1} ${norican.className}`}>DreamGarage</h1>
        </Link>
        <nav className={styles.nav}>
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
        </nav>
        <button className={styles.button} onClick={onIsOpen}>
          <HamburgerMenu
            color="#fff"
            height={18}
            isOpen={false}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            menuClicked={(): void => {}}
            width={24}
          />
        </button>
      </div>
    </header>
  );
}
