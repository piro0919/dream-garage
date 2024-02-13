import RecruitContact, {
  RecruitContactProps,
} from "@/components/RecruitContact";

export default function Page(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/require-await
  const sendEmail: RecruitContactProps["sendEmail"] = async (data) => {
    "use server";

    console.log(data);
  };

  return <RecruitContact sendEmail={sendEmail} />;
}
