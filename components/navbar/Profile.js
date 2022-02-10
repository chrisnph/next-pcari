import React from "react";
import Image from "next/image";

const Profile = ({ user }) => {
  user = {
    name: {
      first: "John",
      last: "Glitch",
    },
    image: "/ellipse.png",
  };

  return (
    <div className="inline-flex items-center justify-end lg:relative absolute top-[2%] right-[70px] lg:right-0 w-fit">
      <div className="min-w-[48px] min-h-[48px] rounded-full mr-0 sm:mr-3">
        <Image
          src={user.image}
          alt={user.name.first + user.name.last}
          width={48}
          height={48}
          layout="responsive"
          className="rounded-full min-w-[48px] min-h-[48px] cursor-pointer"
        />
      </div>
      <div className="font-dm-sans font-bold text-white text-[16px] xs:hidden sm:block">
        John Glitch
      </div>
    </div>
  );
};

export default Profile;
