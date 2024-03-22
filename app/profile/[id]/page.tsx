import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
export default function ProfileId({ params }: any) {
  const id = params.id;
  return (
    <>
      <div>this is profileId:{id}</div>
      <Link href="/">go to home</Link>
      <Header />
      <Footer />
    </>
  );
}
