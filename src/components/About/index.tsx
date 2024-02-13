"use client";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./style.module.scss";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export default function About(): JSX.Element {
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
            <MapContainer
              center={[31.735924, 130.625042]}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              zoom={16}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[31.735924, 130.625042]}>
                <Popup>合同会社DreamGarage</Popup>
              </Marker>
            </MapContainer>
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
      <div className={styles.articleWrapper}>
        <article className={styles.article} data-article="member">
          <div className={styles.h2Wrapper}>
            <h2 className={styles.h2}>メンバー</h2>
          </div>
          <ul className={styles.list2}>
            <li>
              <div className={styles.thumbnailBlock}>
                <Image alt="比嘉 祥平" fill={true} src="/user-sample.jpeg" />
              </div>
              <div className={styles.name}>比嘉 祥平</div>
              <div className={styles.role}>代表取締役</div>
            </li>
            <li>
              <div className={styles.thumbnailBlock}>
                <Image alt="比嘉 祥平" fill={true} src="/user-sample.jpeg" />
              </div>
              <div className={styles.name}>比嘉 祥平</div>
              <div className={styles.role}>代表取締役</div>
            </li>
            <li>
              <div className={styles.thumbnailBlock}>
                <Image alt="比嘉 祥平" fill={true} src="/user-sample.jpeg" />
              </div>
              <div className={styles.name}>比嘉 祥平</div>
              <div className={styles.role}>代表取締役</div>
            </li>
            <li>
              <div className={styles.thumbnailBlock}>
                <Image alt="比嘉 祥平" fill={true} src="/user-sample.jpeg" />
              </div>
              <div className={styles.name}>比嘉 祥平</div>
              <div className={styles.role}>代表取締役</div>
            </li>
            <li>
              <div className={styles.thumbnailBlock}>
                <Image alt="比嘉 祥平" fill={true} src="/user-sample.jpeg" />
              </div>
              <div className={styles.name}>比嘉 祥平</div>
              <div className={styles.role}>代表取締役</div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
