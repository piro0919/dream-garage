"use client";
import i18next from "i18next";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useBoolean } from "usehooks-ts";
import z from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ja/zod.json";
import Drawer from "../Drawer";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./style.module.scss";

void i18next.init({
  lng: "ja",
  resources: {
    ja: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

export type LayoutProps = {
  children: ReactNode;
  pathname: string;
};

export default function Layout({
  children,
  pathname: serverPathname,
}: LayoutProps): JSX.Element {
  const {
    setFalse: offIsOpen,
    setTrue: onIsOpen,
    value: isOpen,
  } = useBoolean(false);
  const [pathname, setPathname] = useState(serverPathname);
  const clientPathname = usePathname();

  useEffect(() => {
    setPathname(clientPathname);
  }, [clientPathname]);

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
      <Drawer isOpen={isOpen} offIsOpen={offIsOpen} pathname={pathname} />
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            fontSize: "1.6rem",
          },
        }}
      />
    </>
  );
}
