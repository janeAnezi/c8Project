// eslint-disable-next-line no-unused-vars
import React from "react";
import PostMain from "../Components/CommunityComp/PostMain";

const CommunityPage = () => {
  return (
    <div className="w-full">
      <div className="flex bg-white-100">
        <div className="flex-auto w-full absolute top-14 mt-20 bg-white rounded-xl">
          <div className="w-[80%] mx-auto mb-10">
            <PostMain></PostMain>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
