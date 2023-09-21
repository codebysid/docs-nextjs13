import React from "react";
import ButtonCustom from "./ButtonCustom";
import { AiFillFolder } from "react-icons/ai";

const DocList = () => {
  return (
    <section className=" w-full flex flex-row justify-between ">
      <div className="flex flex-row items-center justify-between w-full mt-8">
        <p>My Documents</p>
        <div className="flex flex-row justify-between items-center">
          <p>Date Created</p>
          <ButtonCustom>
            <AiFillFolder className="text-2xl" />
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default DocList;
