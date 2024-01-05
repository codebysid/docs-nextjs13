import { signOut, useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { Button } from "./MaterialComponents";

const ProfilePicture = () => {
  const session = useSession();

  return (
    <div className="flex flex-row items-center gap-2">
      {session.data?.user?.image && (
        <div
          title="Click/Tap to Logout"
          className="hover:cursor-pointer w-12 h-12 md:w-16 md:h-16 relative md:mb-0 mr-0 md:mr-4 flex items-center flex-shrink-0"
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
        className="bg-red-500 w-fit"
        ripple={true}
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default ProfilePicture;
