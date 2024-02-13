"use client";
import { useJsApiLoader } from "@react-google-maps/api";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useBoolean } from "usehooks-ts";
import Drawer from "../Drawer";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./style.module.scss";
import GoogleMapContext from "@/contexts/GoogleMapContext";

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
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });
  const [pathname, setPathname] = useState(serverPathname);
  const clientPathname = usePathname();

  useEffect(() => {
    setPathname(clientPathname);
  }, [clientPathname]);

  return (
    <GoogleMapContext.Provider value={{ isLoaded }}>
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
    </GoogleMapContext.Provider>
  );
}
