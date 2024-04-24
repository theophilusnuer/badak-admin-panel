import React from "react";

export default function Appbar() {
  return (
    <div className="rounded-lg bg-white mt-4 p-3 shadow-lg">
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="text-blue-700 font-semibold text-lg md:mr-10 mb-4 md:mb-0">
          Toutes vous Demandes
        </p>
        <div className="flex flex-col md:flex-row items-center md:ml-10">
          <input
            type="text"
            placeholder="Search"
            className="bg-white px-3 py-1 rounded-md text-sm focus:outline-none border border-blue-700 mb-2 md:mb-0 md:mr-2"
          />
          <button className="px-3 py-1 bg-white text-blue-700 rounded-md border border-blue-700 hover:bg-blue-700 hover:text-white text-sm">
            Search
          </button>
        </div>
        <div className="flex items-center px-3 ml-0 mt-4 md:mt-0 md:ml-10">
          <img src="" alt="Avatar" className="w-8 h-8 shadow-md rounded-full" />
          <span className="text-blue-700 ml-2 font-semibold">Profile name</span>
        </div>
      </div>
    </div>
  );
}
