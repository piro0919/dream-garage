import Contact, { ContactProps } from "@/components/Contact";
import transporter from "@/lib/transporter";

export default function Page(): JSX.Element {
  const sendEmail: ContactProps["sendEmail"] = async ({
    email,
    name,
    text,
  }) => {
    "use server";

    await transporter.sendMail({
      replyTo: `"${name}" <${email}>`,
      subject: "【DreamGarage】お問い合わせ",
      text,
      to: process.env.NODEMAILER_AUTH_USER,
    });
  };

  return <Contact sendEmail={sendEmail} />;
}
