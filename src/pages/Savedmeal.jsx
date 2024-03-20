import React from "react";

//const apiKey = "38ff337b4439431586d2141d7072a80e";

function Savedmeals() {
  return (
    <>
      <div className="flex flex-col gap-3 px-4 py-6">
        <h2 className="text-[#101010] text-base font-bold">Saved Meal Plans</h2>

        <div className="w-full flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 w-full">
            <div className="w-[60px] h-[60px] overflow-hidden rounded-md shrink-0">
              <img
                src=""
                className="w-[60px] h-[0px] object-contain"
                alt="Meal name"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-1 items-start flex-shrink flex-1">
              <p className="text-base line-clamp-1"> Single food</p>

              <div className="flex gap-3 items-start text-sm">
                <span className="">Popular</span>
                <GoDotFill className="text-slate-300" />
                <span>Vegan Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Savedmeals;
