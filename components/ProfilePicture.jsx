import { signOut, useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { Button } from "./MaterialComponents";

const ProfilePicture = () => {
  const session = useSession();
  return (
    <div className="flex flex-row">
      {session.data?.user?.image && (
        <div
          title="Click/Tap to Logout"
          className="hover:cursor-pointer w-12 h-12 relative mr-4 flex flex-row"
        >
          <Image
            src={session.data.user.image}
            layout="fill"
            sizes="100vw"
            loading="lazy"
            alt="dp"
            className="rounded-full"
          />
        </div>
      )}
      <Button
        className=" bg-red-500"
        ripple={true}
        onClick={() => {
          signOut({ callbackUrl: "/" })
        }}
      >
        SignOut
      </Button>
    </div>
  );
};

export default ProfilePicture;
