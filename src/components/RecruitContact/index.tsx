"use client";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import i18next from "i18next";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";
import z from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ja/zod.json";
import styles from "./style.module.scss";

void i18next.init({
  lng: "ja",
  resources: {
    ja: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

const schema = z.object({
  address: z.string().min(1),
  birthDate: z.string().min(1),
  consultationAndAppeal: z.string(),
  currentJob: z.string().min(1),
  driversLicense: z.boolean(),
  email: z.string().min(1).email(),
  finalEducation: z.string().min(1),
  furigana: z.string().min(1),
  graduationSchoolFacultyDepartment: z.string().min(1),
  name: z.string().min(1),
  otherQualifications: z.string(),
  sex: z.string(),
  tel: z.string().min(1),
  workHistory: z.string().min(1),
});

type FieldTypes = z.infer<typeof schema>;

export type RecruitContactProps = {
  sendEmail: (data: FieldTypes) => Promise<void>;
};

export default function RecruitContact({
  sendEmail,
}: RecruitContactProps): JSX.Element {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FieldTypes>({
    defaultValues: {
      address: "",
      birthDate: "",
      consultationAndAppeal: "",
      currentJob: "",
      driversLicense: false,
      email: "",
      finalEducation: "",
      furigana: "",
      graduationSchoolFacultyDepartment: "",
      name: "",
      otherQualifications: "",
      sex: "",
      tel: "",
      workHistory: "",
    },
    resolver: zodResolver(schema),
    shouldUnregister: false,
  });
  const router = useRouter();
  const action = handleSubmit(async (data) => {
    await toast.promise(sendEmail(data), {
      error: "メッセージの送信に失敗しました",
      loading: "送信しています…",
      success: "メッセージを送信しました",
    });

    router.push("/recruit");
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.h2Wrapper}>
          <h2 className={styles.h2}>応募フォーム</h2>
        </div>
        <div className={styles.formWrapper}>
          <form
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            action={action}
          >
            <div className={styles.formInner}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  氏名<abbr>*</abbr>
                </label>
                <input
                  {...register("name")}
                  className={styles.input}
                  id="name"
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="furigana">
                  ふりがな<abbr>*</abbr>
                </label>
                <input
                  {...register("furigana")}
                  className={styles.input}
                  id="furigana"
                />
                <ErrorMessage
                  errors={errors}
                  name="furigana"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="birthDate">
                  生年月日<abbr>*</abbr>
                </label>
                <input
                  {...register("birthDate")}
                  className={styles.input}
                  id="birthDate"
                  type="date"
                />
                <ErrorMessage
                  errors={errors}
                  name="birthDate"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="currentJob">
                  現在の職業<abbr>*</abbr>
                </label>
                <select
                  {...register("currentJob")}
                  className={styles.input}
                  id="currentJob"
                >
                  <option disabled={true} value="">
                    選択してください
                  </option>
                  {[
                    "高校生",
                    "大学生",
                    "大学院生",
                    "短大生",
                    "専門学校生",
                    "アルバイト・パート",
                    "正社員",
                    "契約社員",
                    "派遣社員",
                    "主婦・主夫",
                    "無職",
                    "その他",
                  ].map((currentJob) => (
                    <option key={currentJob} value={currentJob}>
                      {currentJob}
                    </option>
                  ))}
                </select>
                <ErrorMessage
                  errors={errors}
                  name="currentJob"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="address">
                  住所<abbr>*</abbr>
                </label>
                <TextareaAutosize
                  {...register("address")}
                  className={styles.textarea}
                  id="address"
                  minRows={2}
                />
                <ErrorMessage
                  errors={errors}
                  name="address"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="tel">
                  電話番号<abbr>*</abbr>
                </label>
                <input {...register("tel")} className={styles.input} id="tel" />
                <ErrorMessage
                  errors={errors}
                  name="tel"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  メールアドレス<abbr>*</abbr>
                </label>
                <input
                  {...register("email")}
                  className={styles.input}
                  id="email"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>性別</label>
                <div className={styles.radioFieldsWrapper}>
                  <div className={styles.radioField}>
                    <input
                      {...register("sex")}
                      className={styles.input}
                      id="man"
                      type="radio"
                      value="男性"
                    />
                    <label htmlFor="man">男性</label>
                  </div>
                  <div className={styles.radioField}>
                    <input
                      {...register("sex")}
                      className={styles.input}
                      id="woman"
                      type="radio"
                      value="女性"
                    />
                    <label htmlFor="woman">女性</label>
                  </div>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="sex"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <hr className={styles.hr} />
              <div className={styles.field}>
                <label className={styles.label} htmlFor="finalEducation">
                  最終学歴<abbr>*</abbr>
                </label>
                <select
                  {...register("finalEducation")}
                  className={styles.input}
                  id="finalEducation"
                >
                  <option disabled={true} value="">
                    選択してください
                  </option>
                  {[
                    "大学院了（博士）",
                    "大学院了（修士）",
                    "大学卒",
                    "短大卒",
                    "高専卒",
                    "専門学校卒",
                    "高校卒",
                    "その他",
                  ].map((finalEducation) => (
                    <option key={finalEducation} value={finalEducation}>
                      {finalEducation}
                    </option>
                  ))}
                </select>
                <ErrorMessage
                  errors={errors}
                  name="finalEducation"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label
                  className={styles.label}
                  htmlFor="graduationSchoolFacultyDepartment"
                >
                  卒業校・学部・学科<abbr>*</abbr>
                </label>
                <TextareaAutosize
                  {...register("graduationSchoolFacultyDepartment")}
                  className={styles.textarea}
                  id="graduationSchoolFacultyDepartment"
                  minRows={2}
                />
                <ErrorMessage
                  errors={errors}
                  name="graduationSchoolFacultyDepartment"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="driversLicense">
                  普通自動車免許<abbr>*</abbr>
                </label>
                <div className={styles.checkboxField}>
                  <input
                    {...register("driversLicense")}
                    className={styles.input}
                    id="driversLicense"
                    type="checkbox"
                  />
                  <label htmlFor="driversLicense">あり</label>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="driversLicense"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="otherQualifications">
                  その他資格
                </label>
                <TextareaAutosize
                  {...register("otherQualifications")}
                  className={styles.textarea}
                  id="otherQualifications"
                  minRows={2}
                />
                <ErrorMessage
                  errors={errors}
                  name="otherQualifications"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <hr className={styles.hr} />
              <div className={styles.field}>
                <label className={styles.label} htmlFor="workHistory">
                  職務履歴（社名・職種と各年数）<abbr>*</abbr>
                </label>
                <TextareaAutosize
                  {...register("workHistory")}
                  className={styles.textarea}
                  id="workHistory"
                  minRows={4}
                />
                <ErrorMessage
                  errors={errors}
                  name="workHistory"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="consultationAndAppeal">
                  相談やアピールなど
                </label>
                <TextareaAutosize
                  {...register("consultationAndAppeal")}
                  className={styles.textarea}
                  id="consultationAndAppeal"
                  minRows={4}
                />
                <ErrorMessage
                  errors={errors}
                  name="consultationAndAppeal"
                  render={({ message }): ReactNode => (
                    <p className={styles.errorMessage}>{message}</p>
                  )}
                />
              </div>
              <div className={styles.formFooter}>
                <button
                  className={styles.button}
                  disabled={isSubmitting}
                  type="submit"
                >
                  送信
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
