import RecruitContact, {
  RecruitContactProps,
} from "@/components/RecruitContact";
import transporter from "@/lib/transporter";

export default function Page(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/require-await
  const sendEmail: RecruitContactProps["sendEmail"] = async ({
    address,
    birthDate,
    consultationAndAppeal,
    currentJob,
    driversLicense,
    email,
    finalEducation,
    furigana,
    graduationSchoolFacultyDepartment,
    name,
    otherQualifications,
    sex,
    tel,
    workHistory,
  }) => {
    "use server";

    const html = `<dl style="white-space: pre;">
<dt>氏名</dt><dd>${name}</dd>
<dt>ふりがな</dt><dd>${furigana}</dd>
<dt>生年月日</dt><dd>${birthDate}</dd>
<dt>現在の職業</dt><dd>${currentJob}</dd>
<dt>住所</dt><dd>${address}</dd>
<dt>電話番号</dt><dd>${tel}</dd>
<dt>メールアドレス</dt><dd>${email}</dd>
<dt>性別</dt><dd>${sex}</dd>
<dt>最終学歴</dt><dd>${finalEducation}</dd>
<dt>卒業校・学部・学科</dt><dd>${graduationSchoolFacultyDepartment}</dd>
<dt>普通自動車免許</dt><dd>${driversLicense ? "あり" : "なし"}</dd>
<dt>その他資格</dt><dd>${otherQualifications}</dd>
<dt>職務履歴（社名・職種と各年数）</dt><dd>${workHistory}</dd>
<dt>相談やアピールなど</dt><dd>${consultationAndAppeal}</dd>
</dl>`;

    await transporter.sendMail({
      html,
      replyTo: `"${name}" <${email}>`,
      subject: "【DreamGarage】応募フォーム",
      to: process.env.NODEMAILER_AUTH_USER,
    });
  };

  return <RecruitContact sendEmail={sendEmail} />;
}
