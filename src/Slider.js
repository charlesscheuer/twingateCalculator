import React from "react";
import RangeInput from "./RangeInput";

export default function Slider(props) {
  return (
    <div className="w-full rounded-md px-4 mt-4 mb-2 transition duration-300 ease-in-out ">
      <div
        className={
          "flex justify-between items-center mb-[12px] cursor-pointer "
        }
      >
        <h3 className="text-dark font-medium">Users</h3>
        <div className="text-dark min-w-[80px] bg-g-2 py-2 rounded-md font-semibold">
          {Number(props.users).toLocaleString()}
        </div>
      </div>
      <div className="overflow-hidden h-[40px] bg-g-2 mt-2 rounded-md cursor-pointer">
        <RangeInput
          handleUserSlide={props.handleUserSlide}
          users={props.users}
          onMouseUp={props.handleUserSlide}
        />
      </div>
    </div>
  );
}
