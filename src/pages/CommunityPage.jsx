// eslint-disable-next-line no-unused-vars
import React from "react";
import PostMain from "../Components/CommunityComp/PostMain";

const CommunityPage = () => {
  return (
    <div className="w-full">
      <div className="flex bg-white-100">
        <div className="flex-auto w-full mt-8 bg-white rounded-xl">
          <div className="w-[80%] mx-auto mb-10">
            <h1 className="font-bold text-3xl mb-5">Community</h1>
            <PostMain></PostMain>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
