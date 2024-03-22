// eslint-disable-next-line no-unused-vars
import React from "react";
import Profile from "../Components/Profile";

const ProfilePage = (user) => {
  return (
    <div className="w-full">
      <div className="flex bg-white-100">
        <div className="flex-auto w-full mt-8 bg-white rounded-xl">
          <div className="w-[80%] mx-auto mb-10">
            <h1 className="font-bold text-3xl mb-5">{user.name}</h1>
            <h1 className="font-bold text-3xl mb-5">{user.email}</h1>
            <h1 className="font-bold text-3xl mb-5">{user.profileImage}</h1>
            <h1 className="font-bold text-3xl mb-5">{user.uid}</h1>
            <Profile user={user}></Profile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
