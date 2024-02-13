"use client";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";

export default function Recruit(): JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.h2Wrapper}>
          <h2 className={styles.h2}>採用情報</h2>
        </div>
        <article className={styles.article}>
          <h3 className={styles.h3}>
            内勤営業・カウンターセールス
            携帯ショップ・家電量販店内携帯コーナーでの内勤業務
          </h3>
          <p className={styles.detail}>
            携帯ショップ、家電量販店の携帯コーナースタッフの募集です。
            <br />
            <ul className={styles.list2}>
              <li>
                お店に来たお客様への通信料案内、スマートフォンや光回線の販売・契約
              </li>
              <li>
                ショッピングモールや家電量販店等で行われる携帯イベントでのお客様へのお声かけ・ご提案
              </li>
              <li>社内での各種業務</li>
            </ul>
            携帯ショップでお客様への様々な案内やご提案、販売をするお仕事です。
            <br />
            経験者大歓迎！
            <br />
            初心者大歓迎！
            <br />
            初めての方でもしっかりしたカリキュラムでステップアップ！今後のスキルアップにしっかり繋がります！
            <br />
            ぜひお気軽にご応募してくださいね。
          </p>
          <dl className={styles.list}>
            <dt className={styles.term}>雇用形態</dt>
            <dd className={styles.description}>正社員</dd>
            <dt className={styles.term}>給与</dt>
            <dd className={styles.description}>
              月給180,000円 〜 300,000円
              <br />
              スキル・経験によって決定します。
            </dd>
            <dt className={styles.term}>勤務地</dt>
            <dd className={styles.description}>鹿児島県</dd>
            <dt className={styles.term}>勤務時間</dt>
            <dd className={styles.description}>
              9:00 ～ 18:00、10:00 ～ 19:00など（実働8時間）
              <br />
              シフト制 勤務時間は、勤務先により変動します。
            </dd>
            <dt className={styles.term}>休日</dt>
            <dd className={styles.description}>
              <ul className={styles.list2}>
                <li>週休2日</li>
                <li>年次有給休暇</li>
              </ul>
            </dd>
            <dt className={styles.term}>応募資格</dt>
            <dd className={styles.description}>
              <ul className={styles.list2}>
                <li>普通自動車免許</li>
                <li>通信業の経験をお持ちの方</li>
              </ul>
            </dd>
            <dt className={styles.term}>加入保険</dt>
            <dd className={styles.description}>社会保険完備</dd>
            <dt className={styles.term}>待遇</dt>
            <dd className={styles.description}>
              試用期間（最大3ヶ月）
              <br />
              労働条件はアルバイトまたはパート、時給1,000円 〜
              1,500円となります。
            </dd>
          </dl>
        </article>
        <article className={styles.article}>
          <h3 className={styles.h3}>会社情報</h3>
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
        </article>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={() => {
              router.push("/recruit/contact");
            }}
          >
            応募
          </button>
        </div>
      </div>
    </div>
  );
}
