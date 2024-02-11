"use client";
import { motion } from "framer-motion";
import { Norican, Nunito_Sans as NunitoSans } from "next/font/google";
import Link from "next/link";
import styles from "./style.module.scss";

// eslint-disable-next-line new-cap
const norican = Norican({ subsets: ["latin"], weight: "400" });
// eslint-disable-next-line new-cap
const nunitoSans = NunitoSans({ subsets: ["latin"], weight: "700" });

export default function App(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <motion.div
        animate={{ scale: 1 }}
        className={styles.h1Wrapper}
        initial={{ scale: 0.9 }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
      >
        <motion.h1
          animate={{ opacity: 1 }}
          className={`${styles.h1} ${norican.className}`}
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
        >
          DreamGarage
        </motion.h1>
        <motion.div
          animate={{
            clipPath: "polygon(125% 0%, 150% 0%, 125% 100%, 100% 100%)",
          }}
          className={`${styles.highlight} ${norican.className}`}
          initial={{
            clipPath: "polygon(-25% 0%, 0% 0%, -25% 100%, -50% 100%)",
          }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            ease: "linear",
          }}
        >
          DreamGarage
        </motion.div>
        <motion.div
          animate={{
            clipPath: "polygon(125% 0%, 150% 0%, 125% 100%, 100% 100%)",
          }}
          className={`${styles.highlight} ${norican.className}`}
          initial={{
            clipPath: "polygon(-25% 0%, 0% 0%, -25% 100%, -50% 100%)",
          }}
          transition={{
            delay: 0.25,
            duration: 0.3,
            ease: "linear",
          }}
        >
          DreamGarage
        </motion.div>
      </motion.div>
      <motion.nav
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.25,
          ease: "linear",
        }}
      >
        <ul className={`${styles.list} ${nunitoSans.className}`}>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
          <li>
            <Link href="/recruit">RECRUIT</Link>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}
