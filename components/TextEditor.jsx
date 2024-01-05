import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { db } from "../firebase";
import toast from 'react-hot-toast';

import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const TextEditor = ({ id }) => {
  const [editor, setEditor] = useState("");
  const [existingData, setExistingdata] = useState();
  const session = useSession();

  const docRef = doc(db, `userDocs/${session.data?.user?.email}/docs/${id}`);

  useEffect(() => {
    const checkData = async () => {
      const data = await getDoc(docRef);
      setEditor(data.data()?.editor);
    };
    checkData();
  }, []);

  useEffect(() => {
    const updateEditorInDb = async () => {
      if (!editor) return;
      const data = await updateDoc(docRef, { editor });
      toast("File Saved", {
        duration: 1000,
        position: "top-right",
        className: "",
        icon: "✅"
      })
    };
    updateEditorInDb();
  }, [editor]);
  return (
    <div className="lg:h-[80vh] h-screen w-full flex items-center justify-center bg-bgWhiteShade editor">
      <ReactQuill
        className="h-full"
        theme="snow"
        value={editor}
        modules={modules}
        onChange={setEditor}
      />
    </div>
  );
};

export default TextEditor;
