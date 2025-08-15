import React from "react";

const Card = ({ potraits = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
      {potraits.map((items, index) => (
        <div
          key={index}
          className="w-72 flex flex-col rounded-xl bg-black min-h-[19rem] text-white  transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-lg"
        >
          {/* Image */}
          <div>
            <img
              src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
              alt="test"
              className="object-cover object-center rounded-t-xl w-full h-80 "
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col flex-1 py-4 px-4">
            {/* Title and Price label */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="!text-[30px] text-base">{items.picture}</h1>
              <span className="text-xl font-medium">Price</span>
            </div>

            {/* Push bottom section to bottom */}
            <div className="mt-auto flex justify-between items-center text-sm">
              <p className="leading-tight">{items.hastags}</p>
              <p className="font-semibold">{items.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
