import React from "react";

const MemberProfile = ({ name, role, img }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:-translate-y-2 transition-all duration-200 ">
      <img
        src={img}
        alt=""
        className="w-32 h-32 mx-auto mb-4 object-cover rounded-full"
      />
      <h2 className="text-center text-xl text-gray-600 font-semibold">
        {name}
      </h2>

      <p className="text-center text-gray-500">{role}</p>
    </div>
  );
};

export default MemberProfile;
