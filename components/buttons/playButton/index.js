import React from "react";
import Image from "next/image";

const PlayButton = () => {
  return (
    <div className="flex justify-center md:justify-end items-center xs:mt-20 md:mt-20 lg:mt-0 min-w-[274px]">
      <div>
        <Image src="/btn-play.png" width={274} height={274} />
      </div>
    </div>
  );
};

export default PlayButton;
