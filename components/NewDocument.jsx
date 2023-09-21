"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ButtonCustom from "./ButtonCustom";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "./MaterialComponents";
import DocRow from "./DocRow";
import DocList from "./DocList";
import toast from "react-hot-toast";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { AiOutlineMore } from "react-icons/ai";

const NewDocument = () => {
  const session = useSession();

  const [newDocDialog, setNewDocDialog] = useState(false);
  const [docName, setDocName] = useState("");
  const [snapShotData, setSnapShotData] = useState([]);

  const docsCollectionRef = collection(
    db,
    `userDocs/${session.data.user.email}/docs`
  );

  const handleDialogOpen = () => {
    setNewDocDialog((prev) => !prev);
  };

  const createNewDoc = async () => {
    if (!docName) return;
    setNewDocDialog(false);
    const colRef = collection(db, `userDocs/${session.data.user.email}/docs`);
    const newDoc = await addDoc(colRef, {
      fileName: docName,
      timeStamp: serverTimestamp(),
    });
    toast("✅ File Created", {
      position: "top-right",
    })
    setDocName("");
  };

  useEffect(() => {
    const dataQuery = query(docsCollectionRef, orderBy("timeStamp", "desc"));
    const unsubscribe = onSnapshot(dataQuery, (snapshot) => {
      snapshot.forEach((doc) => {
        setSnapShotData((prev) =>
          prev
            ? [...prev, { ...doc.data(), id: doc.id }]
            : [{ ...doc.data(), id: doc.id }]
        );
      });
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="max-w-3xl flex flex-col mx-auto mt-4 items-start p-4">
      <div className="flex flex-row justify-between w-full text-gray">
        <h2>Start a new document</h2>
        <ButtonCustom>
          <AiOutlineMore className="text-2xl sm:hidden" />
        </ButtonCustom>
      </div>
      <div>
        <div className="relative h-52 w-40">
          <Image
            src="https://links.papareact.com/pju"
            layout="fill"
            sizes="100vw"
            className=" hover:border-2 border-blue hover:cursor-pointer"
            alt="Google Blank"
            onClick={() => handleDialogOpen()}
          />
        </div>
        <Dialog open={newDocDialog} handler={setNewDocDialog}>
          <DialogHeader>Enter Document Name</DialogHeader>
          <DialogBody>
            <input
              type="text"
              value={docName}
              className=" border-b-2 border-gray focus:outline-none text-black"
              onKeyDown={(e) => e.key === "Enter" && createNewDoc()}
              onChange={(e) => setDocName(e.target.value)}
            />
          </DialogBody>
          <DialogFooter className="flex flex-row gap-4">
            <ButtonCustom handler={handleDialogOpen}>
              <span>Cancel</span>
            </ButtonCustom>
            <Button
              className="bg-blue hover:shadow-none shadow-none"
              onClick={() => createNewDoc()}
            >
              <span>CREATE</span>
            </Button>
          </DialogFooter>
        </Dialog>
        <p className="text-gray font-semibold mt-2">Blank</p>
      </div>
      <DocList />
      {snapShotData.map((ele) => {
        return (
          <DocRow
            key={ele.id}
            id={ele.id}
            fileName={ele.fileName}
            timeStamp={ele.timeStamp}
          />
        );
      })}
    </section>
  );
};

const NewDocumentWrapper = () => {
  const session = useSession();
  if (!session.data?.user) return null;

  return <NewDocument />;
};

export default NewDocumentWrapper;
