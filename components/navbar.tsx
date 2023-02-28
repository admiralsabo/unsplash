import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
const navbar = ({
  setSearchText,
  setIsAddPhoto,
}: {
  setSearchText: any;
  setIsAddPhoto: any;
}) => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex justify-start gap-4">
        <Image src={logo} alt="logo" />
        <div className="flex justify-start border border-gray-300 p-2 rounded-lg gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 place-self-center text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search by name"
            className="outline-0"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
        </div>
      </div>
      <div>
        <button
          className="p-2 bg-[#3DB46D] text-white rounded-lg"
          onClick={() => setIsAddPhoto(true)}
        >
          Add a photo
        </button>
      </div>
    </div>
  );
};

export default navbar;
