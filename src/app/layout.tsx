// eslint-disable-next-line filenames/match-exported
import type { Metadata } from "next";
import { Sawarabi_Gothic as SawarabiGothic } from "next/font/google";
import { headers } from "next/headers";
import "react-modern-drawer/dist/index.css";
import "ress";
import "./globals.scss";
import Layout from "@/components/Layout";

// eslint-disable-next-line new-cap
const sawarabiGothic = SawarabiGothic({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  description:
    "DreamGarageは、お客様に最高のサービスを提供し、同時に個々の興味や趣味を大切にすることで、業界での信頼と評価を得ることを目指しています。私たちは常に成長し、変化し続ける通信業界で、お客様にとって最高のパートナーであり続けます。",
  title: "合同会社DreamGarage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const headersList = headers();
  // read the custom x-url header
  const headerUrl = headersList.get("x-url") ?? "";
  const { pathname } = new URL(headerUrl);

  return (
    <html lang="ja">
      <body className={sawarabiGothic.className}>
        <Layout pathname={pathname}>{children}</Layout>
      </body>
    </html>
  );
}
