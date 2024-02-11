import Contact, { ContactProps } from "@/components/Contact";

export default function Page(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/require-await
  const sendEmail: ContactProps["sendEmail"] = async (data) => {
    "use server";

    console.log(data);
  };

  return <Contact sendEmail={sendEmail} />;
}
