"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <h1 className="style">hi there</h1>
      <div className="flex flex-col gap-2 shippori-antique-regular">
        <Link href="profile/1">go to id:1</Link>
        <Link href="profile/2">go to id:2</Link>
        <Link href="profile/3">go to id:3</Link>
        <div className="w-10 h-10 relative">
          <Image
            src="/shot.jpg"
            fill
            alt="this is shot image"
            className="absolute"
          />
        </div>
        <Image
          src="/shot.jpg"
          alt="this is shot image 1"
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
