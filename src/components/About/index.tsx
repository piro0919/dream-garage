"use client";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import Image from "next/image";
import { useContext, useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";
import GoogleMapContext from "@/contexts/GoogleMapContext";

export default function About(): JSX.Element {
  const position = useMemo(
    () => ({
      lat: 31.735924,
      lng: 130.625042,
    }),
    [],
  );
  const { width } = useWindowSize();
  const { isLoaded } = useContext(GoogleMapContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.articleWrapper}>
        <article className={styles.article} data-article="corporate-philosophy">
          <div className={styles.textsWrapper}>
            <div className={styles.h2Wrapper}>
              <h2 className={styles.h2}>仕事7割、趣味全力</h2>
            </div>
            <p className={styles.corporatePhilosophyDescription}>
              DreamGarageは、お客様に最高のサービスを提供し、同時に個々の興味や趣味を大切にすることで、業界での信頼と評価を得ることを目指しています。
              <br />
              私たちは常に成長し、変化し続ける通信業界で、お客様にとって最高のパートナーであり続けます。
            </p>
          </div>
          <div className={styles.thumbnailBlock}>
            <Image
              alt="企業理念"
              className={styles.thumbnail}
              fill={true}
              src="/corporate-philosophy.png"
            />
          </div>
        </article>
      </div>
      <div className={styles.articleWrapper}>
        <article className={styles.article} data-article="about-us">
          <div className={styles.thumbnailBlock}>
            {isLoaded ? (
              <GoogleMap
                center={position}
                key={width}
                mapContainerClassName={styles.mapContainer}
                zoom={16}
              >
                <MarkerF position={position} visible={true} />
              </GoogleMap>
            ) : null}
          </div>
          <div className={styles.textsWrapper}>
            <div className={styles.h2Wrapper}>
              <h2 className={styles.h2}>会社情報</h2>
            </div>
            <dl className={styles.list}>
              <dt className={styles.term}>会社名</dt>
              <dd className={styles.description}>合同会社DreamGarage</dd>
              <dt className={styles.term}>所在地</dt>
              <dd className={styles.description}>
                〒899-5431 鹿児島県姶良市西餠田60-6 ガーデンプレイスB101
              </dd>
              <dt className={styles.term}>設立</dt>
              <dd className={styles.description}>2021年8月30日</dd>
              <dt className={styles.term}>代表者</dt>
              <dd className={styles.description}>比嘉 祥平</dd>
              <dt className={styles.term}>事業内容</dt>
              <dd className={styles.description}>
                通信業での接客、販売、契約事務（携帯やインターネットの契約）
              </dd>
            </dl>
          </div>
        </article>
      </div>
    </div>
  );
}
