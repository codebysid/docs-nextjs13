"use client";
import { Button } from "../../../components/MaterialComponents";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FcDocument } from "react-icons/fc";
import ProfilePicture from "@/components/ProfilePicture";
import TextEditor from "@/components/TextEditor";
import { useRouter } from "next/navigation";

const DocPage = ({ params }) => {
  const session = useSession();
  const router = useRouter();
  const [docSnapshot, setDocSnapshot] = useState({});
  const getDataFromFirestore = async () => {
    const docRef = doc(
      db,
      `userDocs/${session.data?.user?.email}/docs/${params.id}`
    );
    const dataSnapshot = await getDoc(docRef);
    setDocSnapshot(dataSnapshot.data());
  };

  useEffect(() => {
    if (!session) router.push("/");
    getDataFromFirestore();
  });

  return (
    <main>
      <header className="flex sticky top-0 p-4 z-10 bg-bgWhiteShade w-full">
        <nav className="flex flex-row items-center gap-44 w-full lg:justify-around md:ml-32 md:justify-between lg:ml-60">
          <div className="flex flex-row items-center">
            <FcDocument
              onClick={() => router.push("/")}
              className="text-5xl  cursor-pointer lg:text-6xl"
            />
            <h2 className="font-bold px-2">{docSnapshot?.fileName}</h2>
          </div>
          <div className="flex flex-row gap-2 items-center mr-60">
            <ProfilePicture />
          </div>
        </nav>
      </header>

      <TextEditor id={params.id} />
    </main>
  );
};

export default DocPage;
