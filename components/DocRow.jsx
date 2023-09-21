import { useRouter } from "next/navigation";
import React from "react";
import { MdArticle } from "react-icons/md";

const DocRow = ({ fileName, timeStamp, id }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center p-4 justify-around w-full hover:bg-blue-gray-100 cursor-pointer rounded-lg mt-4"
    >
      <MdArticle className="text-2xl ml-5" />
      <p className="flex-grow ml-3">{fileName}</p>
      <p className="mr-5">{timeStamp?.toDate().toLocaleDateString()}</p>
    </div>
  );
};

export default DocRow;
