"use client";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import i18next from "i18next";
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
  email: z.string().min(1).email(),
  name: z.string().min(1),
  text: z.string().min(1),
});

type FieldTypes = z.infer<typeof schema>;

export type ContactProps = {
  sendEmail: (data: FieldTypes) => Promise<void>;
};

export default function Contact({ sendEmail }: ContactProps): JSX.Element {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FieldTypes>({
    defaultValues: {
      email: "",
      name: "",
      text: "",
    },
    resolver: zodResolver(schema),
    shouldUnregister: false,
  });
  const action = handleSubmit(async (data) => {
    await toast.promise(sendEmail(data), {
      error: "メッセージの送信に失敗しました",
      loading: "送信しています…",
      success: "メッセージを送信しました",
    });
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.h2Wrapper}>
          <h2 className={styles.h2}>お問い合わせ</h2>
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
                  お名前 / 企業名<abbr>*</abbr>
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
                <label className={styles.label} htmlFor="text">
                  お問い合わせ内容<abbr>*</abbr>
                </label>
                <TextareaAutosize
                  {...register("text")}
                  className={styles.textarea}
                  id="text"
                  minRows={4}
                />
                <ErrorMessage
                  errors={errors}
                  name="text"
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
