import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoLaptopOutline } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import { BsSmartwatch, BsEarbuds } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { IoIosStar } from "react-icons/io";


const icons = {
  SlScreenSmartphone: SlScreenSmartphone,
  IoLaptopOutline: IoLaptopOutline,
  ImHeadphones: ImHeadphones,
  BsEarbuds: BsEarbuds,
  BsSmartwatch: BsSmartwatch,
  MdOutlineReviews: MdOutlineReviews,
};

function CardComponents({ products }) {
  return (
    <>
      {products.flatMap((item) => {
        const IconComponent = icons[item.icon];
        return (
          <div key={item.productName} className="w-[100%] h-[100%] my-4">
            <div className="w-[100%] p-4 my-4 bg-gray-200 rounded-xl">
              <div className="flex justify-center items-center gap-2">
                {IconComponent && <IconComponent className="" />}
                <h1>{item.productName}</h1>
              </div>
            </div>

            <div className="w-[100%] h-[60%] p-4 bg-gray-200 rounded-xl">
              <div className="flex justify-center items-center gap-2">
                <MdOutlineReviews className="mt-1" />
                <h2>Product Review</h2>
              </div>
              <div className="h-[1px] bg-black my-2"></div>
              {item.productReviews.slice(0, 2).map((review, index) => (
                <div className="flex justify-center items-start gap-2">
                  <IoIosStar className="fill-yellow-200 text-2xl" ></IoIosStar>
                  <div className="my-2" key={index}>
                    {review.productReview}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardComponents;
