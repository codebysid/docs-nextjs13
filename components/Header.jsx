"use client";
import { FcDocument } from "react-icons/fc";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrApps } from "react-icons/gr";
import ButtonCustom from "./ButtonCustom";
import { useSession } from "next-auth/react";
import Login from "./Login";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  const session = useSession();

  return (
    <header className={`flex flex-row p-2 items-center justify-between bg-white max-w-full lg:p-4 lg:justify-around ${!session.data?.user && "h-screen"}`}>

      <div className={`flex flex-row items-center justify-between w-full lg:justify-around ${!session.data?.user && "flex-col"}`}>

        <div className={`${session.data?.user && "flex flex-row items-center"}`}>

          <ButtonCustom>
            <AiOutlineMenu className={`text-gray text-xl lg:text-4xl ${!session.data?.user && "hidden"}`} />
          </ButtonCustom>

          <div className={`flex flex-row items-center object-contain ${!session.data?.user && "flex-col w-full"}`}>

            <FcDocument className={`text-3xl lg:text-5xl ${!session.data?.user && "text-8xl lg:text-9xl"}`} />
            <h1 className={`text-xl text-gray`}>Docs</h1>

          </div>
        </div>


        {session.data?.user ? <ProfilePicture /> : <Login />}

      </div>
      {/* <div className="flex flex-row flex-grow gap-2 items-center px-10 py-4 bg-darkGray rounded-2xl sm:px-5 sm:py-2">
        <BsSearch className="text-gray text-xl" />
        
        <input
        className="bg-transparent text-xl outline-none mx-2"
        placeholder="search"
        />
      </div> */}
    </header>
  );
};

export default Header;
